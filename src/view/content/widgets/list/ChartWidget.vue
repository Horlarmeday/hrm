<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Workforce Availabilty</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 40+ new employees</span
        >
      </h3>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2 pb-0">
      <div class="flex">
        <span class="flex items-center"
          ><div class="h-3 w-3 rounded-full mr-1 bg-primary"></div>
          <span>Existing Directors</span></span
        >
        <span class="flex items-center ml-4"
          ><div class="h-3 w-3 rounded-full mr-1 bg-danger"></div>
          <span>Retired Directors</span></span
        >
      </div>
      <vue-apex-charts
        type="bar"
        height="277"
        :options="analyticsData.clientRetentionBar.chartOptions"
        :series="clientRetentionBar.series"
      />
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";
import analyticsData from "./analyticsData.js";
export default {
  data() {
    return {
      show: "day",
      clientRetentionBar: {
        series: [
          {
            name: "New Clients",
            data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123]
          },
          {
            name: "Retained Clients",
            data: [
              -144,
              -155,
              -141,
              -167,
              -122,
              -143,
              -158,
              -107,
              -126,
              -131,
              -140,
              -137
            ]
          }
        ]
      },
      analyticsData
    };
  },
  components: {
    VueApexCharts
  },
  computed: {
    ...mapGetters(["layoutConfig"]),
    dataToShow() {
      if (this.show === "month") return this.month;
      if (this.show === "week") return this.week;
      if (this.show === "day") return this.day;
      return this.day;
    }
  }
};
</script>
