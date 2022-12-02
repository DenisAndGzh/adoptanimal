<template>
  <div>
    <div style="height: 50px"></div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-7">
        <div class="text-h2 text-primary">Why you need to adopt an animal</div>
        <div
          class="text-body1 text-white"
          style="
            font-size: 26px;
            padding: 50px 25px 10px;
            line-height: 40px;
            font-weight: 150;
          "
        >
          1. Adopting an animal saves a life and saves it from facing the fate
          of death.<br />
          2. It will help you to save a lot of money because you don’t have to
          pay for the procedures yourself and it ensures the pet you are taking
          home is healthy.<br />
          3. Helping to eradicate puppy farms and pet shops. <br />
          4. Your kindness will make you happy and you will recevie
          unconditional love from your pet.<br />
          5. Can benefit to you and your children.
        </div>
      </div>
      <div class="col-3">
        <q-img loading="lazy" src="../assets/imgs/howitworks.png" />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-1"></div>
    <div
      class="col-10"
      style="
        margin: 0;
        padding: 0;
        width: 83%;
        height: 1px;
        background-color: black;
        overflow: hidden;
      "
    ></div>
    <div class="col-1"></div>
  </div>
  <div style="margin: 0; padding: 0 0 50px 0"></div>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <div class="text-h2 text-primary text-center">
        The Process of Adopting an Animal
      </div>
      <div class="q-pa-md" style="padding: 40px 0 40px 0">
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Select favorite pet"
            icon="settings"
            :done="done1"
          >
            You can find your favorite pets in "Animals Waiting for Adoption", 6
            optional pets are displayed each time, and you can display other
            pets by refreshing the page.

            <q-stepper-navigation>
              <q-btn
                @click="
                  () => {
                    done1 = true;
                    step = 2;
                  }
                "
                color="primary"
                label="Continue"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="View pet details"
            caption="Optional"
            icon="create_new_folder"
            :done="done2"
          >
            View additional information about pets by clicking 'MORE INFO'.<br />
            You will get more detailed information about pets.

            <q-stepper-navigation>
              <q-btn
                @click="
                  () => {
                    done2 = true;
                    step = 3;
                  }
                "
                color="primary"
                label="Continue"
              />
              <q-btn
                flat
                @click="step = 1"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step :name="3" title="Contact us" icon="add_comment" :done="done3">
            In order to ensure that the adopter really wants to adopt a pet,
            please remember the pet you want to adopt, and leave us a message,
            we will take the initiative to contact you to ensure that you meet
            our adoption requirements.

            <q-stepper-navigation>
              <q-btn color="primary" @click="done3 = true" label="Finish" />
              <q-btn
                flat
                @click="step = 2"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script setup lang="ts">
const step = ref(1);
const done1 = ref(false);
const done2 = ref(false);
const done3 = ref(false);
</script>

<style lang="scss" scoped></style>
