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
              <img
                :src="Animals.url[0]"
                width="250"
                height="350"
                draggable="false"
              />
              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[0] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[0] }}</div>
                <div class="text-caption text-grey">
                  Hi! This is {{ Animals.name[0] }}. I'm a
                  {{ Animals.age[0] }} year old {{ Animals.breed[0] }}
                  {{ Animals.type[0] }}.<br />
                  With {{ Animals.color[0] }} color. I am looking forward to
                  your adoption!
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn
                  outline
                  color="primary"
                  label="More Info"
                  :to="{ path: '/petinfo', query: { id: Animals.id[0] } }"
                />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <img
                :src="Animals.url[1]"
                width="250"
                height="350"
                draggable="false"
              />
              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[1] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[1] }}</div>
                <div class="text-caption text-grey">
                  Hi! This is {{ Animals.name[1] }}. I'm a
                  {{ Animals.age[1] }} year old {{ Animals.breed[1] }}
                  {{ Animals.type[1] }}.<br />
                  With {{ Animals.color[1] }} color. I am looking forward to
                  your adoption!
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn
                  outline
                  color="primary"
                  label="More Info"
                  :to="{ path: '/petinfo', query: { id: Animals.id[1] } }"
                />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <img
                :src="Animals.url[2]"
                width="250"
                height="350"
                draggable="false"
              />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[2] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[2] }}</div>
                <div class="text-caption text-grey">
                  Hi! This is {{ Animals.name[2] }}. I'm a
                  {{ Animals.age[2] }} year old {{ Animals.breed[2] }}
                  {{ Animals.type[2] }}.<br />
                  With {{ Animals.color[2] }} color. I am looking forward to
                  your adoption!
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn
                  outline
                  color="primary"
                  label="More Info"
                  :to="{ path: '/petinfo', query: { id: Animals.id[2] } }"
                />
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
              <img
                :src="Animals.url[3]"
                width="250"
                height="350"
                draggable="false"
              />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[3] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[3] }}</div>
                <div class="text-caption text-grey">
                  Hi! This is {{ Animals.name[3] }}. I'm a
                  {{ Animals.age[3] }} year old {{ Animals.breed[3] }}
                  {{ Animals.type[3] }}.<br />
                  With {{ Animals.color[3] }} color. I am looking forward to
                  your adoption!
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn
                  outline
                  color="primary"
                  label="More Info"
                  :to="{ path: '/petinfo', query: { id: Animals.id[3] } }"
                />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <img
                :src="Animals.url[4]"
                width="250"
                height="350"
                draggable="false"
              />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[4] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[4] }}</div>
                <div class="text-caption text-grey">
                  Hi! This is {{ Animals.name[4] }}. I'm a
                  {{ Animals.age[4] }} year old {{ Animals.breed[4] }}
                  {{ Animals.type[4] }}.<br />
                  With {{ Animals.color[4] }} color. I am looking forward to
                  your adoption!
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn
                  outline
                  color="primary"
                  label="More Info"
                  :to="{ path: '/petinfo', query: { id: Animals.id[4] } }"
                />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col animal_card">
            <q-card class="my-card" flat>
              <img
                :src="Animals.url[5]"
                width="250"
                height="350"
                draggable="false"
              />

              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{ Animals.type[5] }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ Animals.name[5] }}</div>
                <div class="text-caption text-grey">
                  Hi! This is {{ Animals.name[5] }}. I'm a
                  {{ Animals.age[5] }} year old {{ Animals.breed[5] }}
                  {{ Animals.type[5] }}.<br />
                  With {{ Animals.color[5] }} color. I am looking forward to
                  your adoption!
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn
                  outline
                  color="primary"
                  label="More Info"
                  :to="{ path: '/petinfo', query: { id: Animals.id[5] } }"
                />
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
