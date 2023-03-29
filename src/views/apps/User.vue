<template>
  <div>
    <!-- <KTDatatable></KTDatatable> -->
    <table class="table table-rounded table-row-bordered border gy-7 gs-7">
      <thead>
        <tr class="fw-bold fs-5 text-gray-800 border-bottom-2 border-gray-200">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
        </tr>
      </tbody>
    </table>
    <!-- {{ category  }} -->
  </div>
</template>

<script lang="ts">
import { defineComponent,onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import axios from "axios";
import { mapActions, mapGetters ,  } from "vuex";
export default defineComponent({
  name: "Users",
  setup() {
    const store = useStore();
  },
  data() {
    return {
      category: [],
    };
  },
  methods: {
    ...mapActions("category", ["getCategory"]),
    // async getCategory() {
    //   const response = await this.$axios.get("http://localhost:8000/api/admin/categorys");
    //   console.log(response);
      
    //   this.category = response.data;

    // },

    // getCategory() {
    //   axios
    //     .get("http://localhost:8000/api/admin/categorys")
    //     .then((response) => {
    //       console.log(response);
    //       this.category = response.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

  },

});
</script>
