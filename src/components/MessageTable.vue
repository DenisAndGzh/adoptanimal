<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6 q-my-md">
      <h3 class="text-primary text-center q-my-md">Leaving your message</h3>
      <q-form
        style="padding: 10px"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="Message.name"
          label="Your name *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please write your name',
          ]"
        />

        <q-input
          filled
          type="email"
          v-model="Message.email"
          label="Your Email *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please write your emael',
          ]"
        />
        <q-input
          style="background-position: center"
          v-model="Message.message"
          filled
          label="Your message *"
          type="textarea"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please write your messages',
          ]"
        />
        <div class="row">
          <div class="col-6 text-center">
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
          <div class="col-6 text-center">
            <q-btn
              label="Reset"
              type="reset"
              color="blue-grey-5"
              class="q-ml-sm"
            />
          </div>
        </div>
      </q-form>
    </div>
    <div class="col-3"></div>
  </div>

  <q-dialog v-model="flag">
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">Your message was successfully submitted</div>
      </q-card-section>
      <q-card-section style="max-height: 50vh" class="scroll" horizontal>
        <div style="white-space: pre-wrap; width: 100%; padding: 15px">
          <div class="row">
            <div class="col-6">Your Name: {{ Message.name }}</div>
            <div class="col-6">Your Email: {{ Message.email }}</div>
          </div>
          <div>Your Messssage:</div>
          <div>
            {{ print_text(Message.message) }}
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="OK" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useMessageStore } from "@/stores/message";
import axios from "axios";
const Message = useMessageStore();

const flag = ref(false);

const onSubmit = async () => {
  try {
    await axios
      .post("https://47.92.133.39/api/msg", Message.$state)
      .then((e) => {
        if (e.status === 200) {
          flag.value = !flag.value;
        } else {
          alert("Fail to send message");
        }
      });
  } catch (e) {
    console.error(e);
    alert("Fail to send message");
  }
};
const onReset = () => {
  Message.name = "";
  Message.email = "";
  Message.message = "";
};

const print_text = (str: string) => {
  let new_str: string = "";
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    new_str += str.charAt(i);
    num += 1;
    if (num === 86) {
      new_str += "\n";
      num = 0;
    }
  }
  return new_str;
};
</script>

<style scoped></style>
