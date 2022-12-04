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
  <div class="row" style="margin: 0; padding: 0 0 50px 0">
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
  <div class="row" style="margin: 0; padding: 0 0 50px 0">
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
  <div class="row" style="padding: 0 0 40px 0">
    <div class="col-3"></div>
    <div class="col-6">
      <div
        class="text-h2 text-center"
        style="padding: 0 0 40px 0"
        color="primary"
      >
        The history of project
      </div>
      <q-timeline color="primary">
        <q-timeline-entry heading> October 22, 2022 </q-timeline-entry>

        <q-timeline-entry icon="done_all">
          <template v-slot:title> Determine the project </template>
          <template v-slot:subtitle> September 19, 2022 </template>

          <div>
            We decided to make a web project for a pet adoption site, providing
            shelter for homeless animals.
          </div>
        </q-timeline-entry>

        <q-timeline-entry icon="done_all">
          <template v-slot:title> Buy domain name </template>
          <template v-slot:subtitle> September 25, 2022 </template>

          <div>
            We purchased the domain name of
            <a href="https://adoptanimal.net/">adoptanimal.net</a> for one year
            for our project.
          </div>
        </q-timeline-entry>

        <q-timeline-entry heading> October, 2022 </q-timeline-entry>
        <q-timeline-entry icon="done_all">
          <template v-slot:title> Project Approval </template>
          <template v-slot:subtitle> October 6, 2022 </template>

          <div>Our project topics are approved.</div>
        </q-timeline-entry>

        <q-timeline-entry icon="done_all">
          <template v-slot:title
            >Complete the site's layout and home page
          </template>
          <template v-slot:subtitle> October 15, 2022 </template>

          <div>
            Designed the overall layout of the website and made the homepage of
            the website.
          </div>
        </q-timeline-entry>

        <q-timeline-entry icon="done_all">
          <template v-slot:title>
            Complete the backend of the website
          </template>
          <template v-slot:subtitle> October 22, 2022 </template>

          <div>
            Purchased the server, completed the backend of the website, and
            provided API services for the website.
          </div>
        </q-timeline-entry>
        <q-timeline-entry heading> November, 2022 </q-timeline-entry>
        <q-timeline-entry icon="done_all">
          <template v-slot:title> Complete database design </template>
          <template v-slot:subtitle> November 10, 2022 </template>

          <div>
            Designed the database for the website and designed the data table
            for various data.
          </div>
        </q-timeline-entry>

        <q-timeline-entry icon="done_all">
          <template v-slot:title>
            Complete the function of leaving messages
          </template>
          <template v-slot:subtitle> November 15, 2022 </template>

          <div>
            Completed the message function, providing users with a channel to
            apply for adoption and put forward opinions.
          </div>
        </q-timeline-entry>

        <q-timeline-entry heading> December, 2022 </q-timeline-entry>
        <q-timeline-entry icon="done_all">
          <template v-slot:title
            >Complete the pet display page design
          </template>
          <template v-slot:subtitle> December 3, 2022 </template>

          <div>
            Completed the design of the pet adoption page, which randomly
            displays 6 different pets to be adopted.
          </div>
        </q-timeline-entry>
        <q-timeline-entry icon="done_all">
          <template v-slot:title>Favorites function </template>
          <template v-slot:subtitle> December 3, 2022 </template>

          <div>Added the ability to store favorite pets for users</div>
        </q-timeline-entry>
        <q-timeline-entry icon="done_all">
          <template v-slot:title>Animal Search Function </template>
          <template v-slot:subtitle> December 4, 2022 </template>

          <div>Realized the function of searching by id, name and breed</div>
        </q-timeline-entry>

        <q-timeline-entry icon="done_all">
          <template v-slot:title>Completed the coding phase </template>
          <template v-slot:subtitle> December 4, 2022 </template>

          <div>
            Completed the coding phase. The next phase will be unit testing as
            well as automated testing
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script setup lang="ts">
const step = ref(1);
const done1 = ref(false);
const done2 = ref(false);
const done3 = ref(false);
</script>

<style lang="scss" scoped></style>
