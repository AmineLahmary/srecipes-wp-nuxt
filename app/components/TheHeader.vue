<script setup lang="ts">
import CATEGORIES from "../queries/Categories.gql";

const { onLogin, getToken, onLogout } = useApollo();
const { data } = useAsyncQuery(CATEGORIES);
const state = ref({
    username: "",
  password: "",
});

const fillUpForm = () => {
    state.value.username = 'srecipes-a';
    state.value.password = 'NYxD5v%X7dhQLC0Bg*VLgkrhx)1';
} 
const isShown = ref(false);

const categories = computed(() => data.value?.categories?.nodes);
const isLoggdin = ref(false);
const qry = gql`
  mutation LoginUser($input: LoginInput!) {
    login(input: $input) {
      refreshToken
    }
  }
`;
const { mutate, onDone } = useMutation(qry);

const onSubmit = () => {
  mutate( {
    input: {
      clientMutationId: "uniqueId",
      username: state.value.username,
      password: state.value.password,
    },
  },
);
    console.log(state.value);
  onDone((handler) => {
    onLogin(handler.data.login.refreshToken);
    isShown.value = false;
    isLoggdin.value = true;
  });
};

const items = ref([
  [
    {
      label: "Benjamin",
      avatar: {
        src: "https://github.com/benjamincanac.png",
      },
      type: "label",
    },
  ],
  [
    {
      label: "Profile",
      icon: "i-lucide-user",
      to: "/my-account",
    },
    {
      label: "add recipe",
      icon: "i-lucide-plus",
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      to: "https://github.com/amineLamary",
      target: "_blank",
    },
    {
      label: "Support",
      icon: "i-lucide-life-buoy",
      to: "https://amine-lahmary.dev",
      target: "_blank",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      onSelect: () => {
        console.log("logout");
        isLoggdin.value = false;
        onLogout();
      }
    },
  ],
]);

onMounted(async () => {
  isLoggdin.value = await getToken();
});
</script>

<template>
  <header class="border-b border-gray-200 bg-white sticky top-0 py-4">
    <div class="container flex items-center justify-between">
      <NuxtLink class="flex items-center" to="https://github.com/AmineLahmary/srecipes-wp-nuxt">
        <UIcon
          name="arcticons:enrecipes"
          mode="svg"
          size="32"
          class="stroke-3"
        />
        <span class="text-xl ml-2 leading-none mt-1">
          WP-Nuxt-<span class="font-bold text-amber-400">S</span>Recipes
        </span>
      </NuxtLink>
      <div class="flex items-center gap-5">
        <nav>
          <ul class="md:flex gap-5 hidden">
            <li
              v-for="category in categories"
              :key="category.id"
              class="capitalize hover:underline"
            >
              <NuxtLink :to="`/categories/${category.slug}`">
                {{ category.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <UModal v-if="!isLoggdin" v-model:open="isShown">
          <UButton color="secondary" class="cursor-pointer"
            >Login</UButton
          >

          <template #content>
            <div class="p-5 bg-white rounded flex justify-between">
              <UForm :state="state" class="space-y-4" @submit="onSubmit">
                <UFormField label="Email" name="email">
                  <UInput v-model="state.username" />
                </UFormField>

                <UFormField label="Password" name="password">
                  <UInput type="password" v-model="state.password" />
                </UFormField>
                {{ state }}
                <UButton type="submit"> Submit </UButton>
              </UForm>
              <USeparator orientation="vertical" class="h-48" />
              <div class="flex flex-col gap-5 max-w-[20ch] text-wrap">
                <UButton color="secondary" class="cursor-pointer"
                  @click="fillUpForm"
                  >fillUpForm with true values</UButton
                >
              </div>
            </div>
          </template>
        </UModal>
        <div v-else>
          <UDropdownMenu
            :items="items"
            :ui="{
              content: 'w-48',
            }"
          >
            <UButton color="secondary">
              My Account
            </UButton>
          </UDropdownMenu>
        </div>
      </div>
    </div>
  </header>
</template>
