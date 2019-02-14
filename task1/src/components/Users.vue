<template>
  <div id="users">
    <!-- content of users page -->
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <!-- side view -->
        <b-col sm="6" md="3" xs="6">
          <h3>Users List</h3>
          <b-list-group>
            <!-- user item -->
            <b-list-group-item
              @click="getInfo(item.login)"
              v-for="(item, index) in list_items.slice(0,limit)"
              :key="index"
              href="#"
            >
              <router-link :to="{ name: 'users', params: { login: item.login }}">
                <div>
                <b-img class="list-img" :src="item.avatar_url" fluid alt="Responsive image"/>
                <span class="user_id">{{ item.id }}</span>
                {{ item.login }}
                </div>
              </router-link>
            </b-list-group-item>
          </b-list-group>
          <div>
            <b-button variant="success" @click="loadMore(limit)">Load More</b-button>
          </div>
        </b-col>

        <!-- usser view -->
        <b-col sm="6" md="9" xs="6">
          <h3>Users Info</h3>
          <div class="data">
            <b-col sm="12" md="12" xs="12">
              <b-img :src="avatar" fluid alt="Responsive image"/>
            </b-col>
            <br>
            <!-- user data-->
            <b-row class="text-center">
              <b-col sm="6" md="6" xs="6" class="inner-item">User Id</b-col>
              <b-col sm="6" md="6" xs="6" class="inner-item bold">{{(userId)}}</b-col>
            </b-row>
            <b-row class="text-center">
              <b-col sm="6" md="6" xs="6" class="inner-item">User Name</b-col>
              <b-col sm="6" md="6" xs="6" class="inner-item bold">{{userName}}</b-col>
            </b-row>
            <b-row class="text-center">
              <b-col sm="6" md="6" xs="6" class="inner-item">Email</b-col>
              <b-col sm="6" md="6" xs="6" class="inner-item bold">{{(email)}}</b-col>
            </b-row>
            <b-row class="text-center">
              <b-col sm="6" md="6" xs="6" class="inner-item">Created at</b-col>
              <b-col sm="6" md="6" xs="6" class="inner-item bold">{{created_At}}</b-col>
            </b-row>
          </div>
          <!-- </div> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      list_items: [],
      users_data: {},
      userId: "",
      userName: "",
      avatar: "",
      email: "",
      created_At: "",
      initial_value: 0,
      limit: 10,
      login: ""
    };
  },

  mounted() {
    // get users list (side view)
    axios.get("https://api.github.com/users").then(response => {
      this.list_items = response.data;
      // get default user (users view)
      this.getInfo(this.list_items[0].login);
    });
    //
  },
  methods: {
    // get  user data (users view)
    getInfo: function(login_item) {
      axios.get("https://api.github.com/users/" + login_item).then(response => {
        this.users_data = response.data;
        this.userId =
          this.users_data.id == null || this.users_data.id == ""
            ? "no value"
            : this.users_data.id;
        this.userName =
          this.users_data.login == null || this.users_data.login == ""
            ? "no value"
            : this.users_data.login;
        this.avatar =
          this.users_data.avatar_url == null || this.users_data.avatar_url == ""
            ? "no value"
            : this.users_data.avatar_url;
        this.email =
          this.users_data.email == null || this.users_data.email == ""
            ? "no value"
            : this.users_data.email;
        this.created_At =
          this.users_data.created_at == null || this.users_data.created_at == ""
            ? "no value"
            : this.users_data.created_at;
      });
    },
    // load more users
    loadMore: function(lim) {
      this.limit = lim + 10;
    }
  }
};
</script>
<!-- styling for the component -->
<style>
#users {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    #users h3 {
      background: #495057;
      padding: 10px;
      color: #fff;
      border: 2px solid #343a40;
    }
    .list-group {
      height: 500px;
      overflow: auto;
    }
        .list-group-item {
          text-align: left;
          padding:0;
        }
          .user_id {
            color: #004085;
            font-weight: bold;
            font-size: 15px;
            margin-right: 10px;
          }
          .list-img {
            width: 30px;
            height: 30px;
            border: 1px solid #495057;
            padding: 2px;
            margin-right: 5px;
          }
          #users .btn {
            width: 100%;
            background: #196bc1;
            border: 1px solid rgb(21, 64, 109);
            box-shadow: none;
          }
    .list-group::-webkit-scrollbar {
      width: 10px;
    }

    .list-group::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    .list-group::-webkit-scrollbar-thumb {
      background-color: #15406d;
      outline: 1px solid slategrey;
    }
    .data img {
      border: 2px solid #495057;
      width: 200px !important;
      height: 200px !important;
      /* text-align: center; */
      padding: 5px;
    }
    .inner-item {
      text-align: left;
      margin-bottom: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.6);
      padding: 15px 0;
    }
    .bold {
      font-weight: bold;
    }

</style>