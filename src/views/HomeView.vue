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
            img-src="../assets/imgs/5.jpeg"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">First stop</div>
              <div class="text-subtitle1">Mountains</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="../assets/imgs/4.jpeg">
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
              class="my-card q-pa-sm flex flex-center text-center box-shadow"
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
              class="my-card q-pa-sm flex flex-center text-center box-shadow"
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
              class="my-card q-pa-sm flex flex-center text-center box-shadow"
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

        <MessageTable></MessageTable>
      </q-page>
    </q-page-container>
  </div>
</template>

<script setup lang="ts">
import MessageTable from "../components/MessageTable.vue";
const slide = ref(1);
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

.my-card {
  transition: box-shadow 0.3s;
  margin: 40px;
  border-radius: 10px;
}
.my-card:hover {
  box-shadow: 10px 10px 50px rgba(83, 83, 83, 0.5) !important;
}
</style>
