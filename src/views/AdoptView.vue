<template>
  <div>
    <h2 style="padding: 40px 0 5px" class="text-h2 text-white text-center">
      Animals Awaiting Adoption
    </h2>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="secondary"
      padding
      infinite
      arrows
      height="600px"
      control-type="regular"
      class="bg-secondary rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[0] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[0] }}</div>
                <div class="text-caption text-grey">
                  {{ Animals.description[0] }}
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn outline color="primary" label="More Info" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[1] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[1] }}</div>
                <div class="text-caption text-grey">
                  {{ Animals.description[1] }}
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn outline color="primary" label="More Info" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[2] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[2] }}</div>
                <div class="text-caption text-grey">
                  {{ Animals.description[2] }}
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn outline color="primary" label="More Info" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[3] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[3] }}</div>
                <div class="text-caption text-grey">
                  {{ Animals.description[3] }}
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn outline color="primary" label="More Info" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[4] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[4] }}</div>
                <div class="text-caption text-grey">
                  {{ Animals.description[4] }}
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn outline color="primary" label="More Info" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[5] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[5] }}</div>
                <div class="text-caption text-grey">
                  {{ Animals.description[5] }}
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn outline color="primary" label="More Info" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="row"></div>
</template>

<script setup lang="ts">
import { useAnimalsStore } from "@/stores/animals";

const Animals = useAnimalsStore();
Animals.init();

const slide = ref(1);
</script>

<style lang="scss" scoped>
.animal_card {
  padding: 0 10px;
}
</style>
