<script setup>
const qry = gql`
  query MyAccount {
    viewer {
      id
      name
      email
      avatar {
        url
    }
    }
  }
`;
const { data } = useAsyncQuery(qry);

const user = computed(() => data.value?.viewer);
</script>
<template>
  <section>
    <div class="container flex flex-col items-center my-20 space-y-5">
      <p>
        My Account, Name: <strong>{{ user?.name }}</strong>
      </p>
      <p>
        Email:
        <strong>
          {{ user?.email }}
        </strong>
      </p>
      <NuxtImg
        :src="user?.avatar?.url"
        class="h-[200px] object-cover rounded-full block"
      />
    </div>
  </section>
</template>
