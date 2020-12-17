<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Directors
        </span>
      </h3>
      <div class="card-toolbar">
        <router-link
          to="/data-entry/create"
          class="btn btn-success font-weight-bolder font-size-sm"
        >
          <span class="svg-icon svg-icon-md svg-icon-white">
            <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg-->
            <inline-svg src="media/svg/icons/Communication/Add-user.svg" />
            <!--end::Svg Icon--> </span
          >Add New Director</router-link
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table table-head-custom table-vertical-center"
          id="kt_advance_table_widget_1"
        >
          <thead>
            <tr class="text-left">
              <th class="pl-0" style="width: 20px">
                <label class="checkbox checkbox-lg checkbox-single">
                  <input
                    type="checkbox"
                    @input="setCheck($event.target.checked)"
                  />
                  <span></span>
                </label>
              </th>
              <th class="pr-0" style="width: 50px">Name</th>
              <th style="min-width: 200px"></th>
              <th style="min-width: 150px">Phone</th>
              <th style="min-width: 150px">State</th>
              <th class="pr-0 text-right" style="min-width: 150px">action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0">
                  <label class="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" :checked="checked" />
                    <span></span>
                  </label>
                </td>
                <td class="pr-0">
                  <div class="symbol symbol-50 symbol-light mt-1">
                    <span class="symbol-label">
                      <img
                        :src="item.text0"
                        class="h-75 align-self-end"
                        alt=""
                      />
                    </span>
                  </div>
                </td>
                <td class="pl-0">
                  <router-link
                    to="/directors/profile"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >{{ item.text1 }}</router-link
                  >
                  <span
                    class="text-muted font-weight-bold text-muted d-block"
                    >{{ item.text2 }}</span
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.text5 }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.text6
                  }}</span>
                </td>
                <td>
                  <div class="d-flex flex-column w-100 mr-2">
                    <div
                      class="d-flex align-items-center justify-content-between mb-2"
                    >
                      <span
                        class="text-muted mr-2 font-size-sm font-weight-bold"
                        >{{ item.text4 }} Years</span
                      >
                      <span class="text-muted font-size-sm font-weight-bold"
                        >Retire</span
                      >
                    </div>
                    <div class="progress progress-xs w-100">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: item.text8 }"
                        v-bind:class="`bg-${item.text9}`"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                <td class="pr-0 text-right">
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-success btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-success">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg-->
                      <inline-svg
                        src="media/svg/icons/General/Settings-1.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-success">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
                      <inline-svg
                        src="media/svg/icons/Communication/Write.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-success btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-success">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
                      <inline-svg src="media/svg/icons/General/Trash.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
    <!--end::Advance Table Widget 2-->
  </div>
</template>

<script>
// import { SET_ALL_DIRECTORS } from "@/core/services/store/director.module";
// import { mapGetters } from "vuex";
// import { mutations} from "@/core/services/store/directors/moduleDirector.js";
export default {
  data() {
    return {
      checked: false,
      list: [
        {
          text0: "media/svg/avatars/001-boy.svg",
          text1: "Adelaja Dare",
          text2: "Director",
          text3: "adelaja@gmail.com",
          text4: "15",
          text5: "09065799555",
          text6: "phone",
          text7: "Male",
          text8: "67%",
          text9: "danger"
        },
        {
          text0: "media/svg/avatars/018-girl-9.svg",
          text1: "Isah Mohammad",
          text2: "Ass. Director",
          text3: "isah@yahoo.com",
          text4: "10",
          text5: "07056744899",
          text6: "phone",
          text7: "Male",
          text8: "80%",
          text9: "primary"
        },
        {
          text0: "media/svg/avatars/047-girl-25.svg",
          text1: "Aliyu Aminu",
          text2: "Director",
          text3: "aliyuaminu@gmail.com",
          text4: "4",
          text5: "08123322333",
          text6: "phone",
          text7: "Male",
          text8: "77%",
          text9: "success"
        },
        {
          text0: "media/svg/avatars/014-girl-7.svg",
          text1: "Jacob Harrison",
          text2: "Director",
          text3: "jacobharrison@gmail.com",
          text4: "5",
          text5: "08065452888",
          text6: "phone",
          text7: "Male",
          text8: "30%",
          text9: "warning"
        },
        {
          text0: "media/svg/avatars/014-girl-7.svg",
          text1: "Lateef Salau",
          text2: "Director",
          text3: "lateef@gmail.com",
          text4: "18",
          text5: "08065452888",
          text6: "phone",
          text7: "Male",
          text8: "49%",
          text9: "primary"
        }
      ]
    };
  },

  // computed: {
  //   ...mapGetters(["getdirectors"])
  // },

  // created() {
  //   this.$store.dispatch(SET_ALL_DIRECTORS);
  // },

  methods: {
    setCheck(checked) {
      this.checked = checked;
    }
  }
};
</script>
