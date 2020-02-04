<template>
  <vs-table :data="users">
    <template slot="thead">
      <vs-th>Email</vs-th>
      <vs-th>Name</vs-th>
      <vs-th>Website</vs-th>
      <vs-th>Nro</vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="tr.email">{{ tr.email }}</vs-td>
        <vs-td :data="tr.username">{{ tr.name }}</vs-td>
        <vs-td :data="tr.website">{{ tr.website }}</vs-td>
        <vs-td :data="tr.id">{{ tr.id }}</vs-td>

        <template class="expand-user" slot="expand">
          <div class="con-expand-users w-full">
            <div class="con-btns-user flex items-center justify-between">
              <div class="con-userx flex items-center justify-start">
                <vs-avatar
                  :badge="tr.id"
                  size="45px"
                  :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`"
                />
                <span>{{ tr.name }}</span>
              </div>
              <div class="flex">
                <vs-button
                  type="border"
                  size="small"
                  icon-pack="feather"
                  icon="icon-phone"
                  class="mr-2"
                ></vs-button>
                <vs-button
                  type="border"
                  size="small"
                  icon-pack="feather"
                  icon="icon-send"
                  color="success"
                  class="mr-2"
                ></vs-button>
                <vs-button
                  type="border"
                  size="small"
                  icon-pack="feather"
                  icon="icon-trash"
                  color="danger"
                ></vs-button>
              </div>
            </div>
            <vs-list>
              <vs-list-item icon-pack="feather" icon="icon-mail" :title="tr.email"></vs-list-item>
              <vs-list-item icon-pack="feather" icon="icon-globe" :title="tr.website"></vs-list-item>
            </vs-list>
          </div>
        </template>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net"
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          website: "ramiro.info"
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz"
        }
      ]
    };
  }
};
</script>
        