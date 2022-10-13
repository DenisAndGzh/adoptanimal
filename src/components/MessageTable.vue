<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6 q-my-md">
      <h3 class="text-white text-center q-my-md">Leaving your message</h3>
      <q-form
        style="padding: 10px"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="message.name"
          label="Your name *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please write your name',
          ]"
        />

        <q-input
          filled
          type="email"
          v-model="message.email"
          label="Your Email *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please write your emael',
          ]"
        />
        <q-input
          style="background-position: center"
          v-model="message.text"
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
            <div class="col-6">Your Name: {{ message.name }}</div>
            <div class="col-6">Your Email: {{ message.email }}</div>
          </div>
          <div>Your Messssage:</div>
          <div>
            {{ print_text(message.text) }}
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
const message = useMessageStore();

const flag = ref(false);

const onSubmit = (e: Event | SubmitEvent) => {
  const arr = [...(e.target as any)];
  message.name = arr[0].value;
  message.email = arr[1].value;
  message.text = arr[2].value;
  flag.value = !flag.value;
};
const onReset = () => {
  message.name = "";
  message.email = "";
  message.text = "";
};

const print_text = (str: string) => {
  let new_srt: string = "";
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    new_srt += str.charAt(i);
    num += 1;
    if (num === 86) {
      new_srt += "\n";
      num = 0;
    }
  }
  return new_srt;
};
</script>

<style scoped></style>
