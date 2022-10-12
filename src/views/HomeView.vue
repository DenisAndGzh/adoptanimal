<template>
  <div>
    <q-page-container>
      <q-page>
        <q-carousel
          arrows
          animated
          infinite
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          control-color="secondary"
          autoplay
          v-model="slide"
          height="440px"
        >
          <q-carousel-slide
            class="q-pa-none"
            :name="1"
            img-src="../assets/imgs/1.jpeg"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">First stop</div>
              <div class="text-subtitle1">Mountains</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="../assets/imgs/2.jpeg">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Second stop</div>
              <div class="text-subtitle1">Famous City</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="../assets/imgs/3.jpeg">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Third stop</div>
              <div class="text-subtitle1">Famous Bridge</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="row">
          <div class="col">
            <q-card
              class="q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px"
            >
              <q-card-section>
                <q-card-section>
                  <q-icon size="140px" name="pets" color="secondary" />
                  <div class="text-h6">Multiple Choices</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  We have a variety of pets for people to adopt.
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card
              class="q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px"
            >
              <q-card-section>
                <q-card-section>
                  <q-icon size="140px" name="thumb_up" color="secondary" />
                  <div class="text-h6">Good Reputation</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  We have a solid reputation for pet adoption.
                </q-card-section></q-card-section
              >
            </q-card>
          </div>
          <div class="col">
            <q-card
              class="q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px"
              ><q-card-section>
                <q-card-section>
                  <q-icon
                    size="140px"
                    name="volunteer_activism"
                    color="secondary"
                  />
                  <div class="text-h6">Non-Profit</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  We are a good non-profit organization.
                </q-card-section></q-card-section
              >
            </q-card>
          </div>
        </div>
        <div class="quote">
          <div
            class="q-pt-xl full-width full-height flex flex-center"
            style="background-color: #000000ad !important"
          >
            <h3 class="text-white text-center">
              <br /><br />
              Are u looking for adopting a pet?
              <br />

              <br />
              <q-btn
                type="a"
                to="/adopt"
                size="lg"
                label="Adopt"
                color="red-9"
              /><br />
              <br />
              <br />
            </h3>
          </div>
        </div>
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
                v-model="name"
                label="Your name *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                type="email"
                v-model="email"
                label="Your Email *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <q-input
                style="background-position: center"
                v-model="text"
                filled
                label="Your message *"
                type="textarea"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
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
      </q-page>
    </q-page-container>
    <q-dialog v-model="flag">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Your message was successfully submitted</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll" horizontal>
          <div style="white-space: pre-wrap">
            {{ print_text(myForm.text) }}
          </div>
        </q-card-section>

        <q-separator />
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
type props = {
  name: string;
  email: string;
  text: string;
};
const slide = ref(1);
const flag = ref(false);
const name = ref(null);
const email = ref(null);
const text = ref(null);

const myForm = ref<props>({ name: "", email: "", text: "" });
const onSubmit = (e: Event | SubmitEvent) => {
  const arr = [...(e.target as any)];
  myForm.value.name = arr[0].value;
  myForm.value.email = arr[1].value;
  myForm.value.text = arr[2].value;
  flag.value = !flag.value;
};
const onReset = () => {
  name.value = null;
  email.value = null;
  text.value = null;
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

<style lang="scss" scoped>
.q-page-container {
  padding-top: 0px !important;
}
.quote {
  background: url(../assets/imgs/PetAdoptionTips.jpeg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
