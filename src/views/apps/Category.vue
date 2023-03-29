<template>
  <div>
    <KTDatatable></KTDatatable>
    <div>
      <!-- <KTDatatable></KTDatatable> -->
      <table class="table table-rounded table-row-bordered border gy-7 gs-7">
        <thead>
          <tr
            class="fw-bold fs-5 text-gray-800 border-bottom-2 border-gray-200"
          >
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
</script>
