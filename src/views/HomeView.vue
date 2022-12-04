<template>
  <div>
    <q-page-container>
      <q-page>
        <q-parallax :height="450">
          <template v-slot:media>
            <video
              style="width: 100%; height: auto; position: relative; top: -250px"
              autoplay
              loop
              muted
            >
              <source type="video/mp4" src="../assets/vedio/video.mp4" />
            </video>
            <div
              class="absolute-full text-subtitle2 flex flex-center"
              style="background-color: rgba(250, 250, 250, 0.2)"
            ></div>
          </template>

          <h1 class="text-primary" style="font-weight: bolder">Adoptanimal</h1>
          <h3
            class="text-primary"
            style="font-weight: normal; line-height: 80px"
          >
            We are dedicated to bringing homeless pets home.
          </h3>
        </q-parallax>
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
              </q-card-section>
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
              </q-card-section>
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
