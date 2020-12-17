<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Staffs
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
          >Add New Staff</router-link
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
              <th style="min-width: 150px">Email</th>
              <th style="min-width: 150px">Phone</th>
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
                  <a
                    href="#"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >{{ item.text1 }}</a
                  >
                  <span
                    class="text-muted font-weight-bold text-muted d-block"
                    >{{ item.text2 }}</span
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.text3 }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.text4
                  }}</span>
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
      <pagination />
      <!--end::Table-->
    </div>
    <!--end::Body-->
    <!--end::Advance Table Widget 2-->
  </div>
</template>

<script>
import Pagination from "@/view/content/widgets/reusables/Pagination.vue";
export default {
  name: "widget-2",
  data() {
    return {
      list: [
        {
          text0: "media/svg/avatars/001-boy.svg",
          text1: "Aminu Mukhtar",
          text2: "Front-desk",
          text3: "aminu@gmail.com",
          text4: "mail",
          text5: "09065799555",
          text6: "phone"
        },
        {
          text0: "media/svg/avatars/018-girl-9.svg",
          text1: "Jessica Patrick",
          text2: "Front-desk",
          text3: "jessica@yahoo.com",
          text4: "mail",
          text5: "07056744899",
          text6: "phone"
        },
        {
          text0: "media/svg/avatars/047-girl-25.svg",
          text1: "Adekola Azeez",
          text2: "Reception",
          text3: "adekolaazeez@gmail.com",
          text4: "mail",
          text5: "08123322333",
          text6: "phone"
        },
        {
          text0: "media/svg/avatars/014-girl-7.svg",
          text1: "Rekia Abib",
          text2: "Front-desk",
          text3: "rekia4u@gmail.com",
          text4: "mail",
          text5: "08065452888",
          text6: "phone"
        }
      ],
      checked: false
    };
  },
  components: {
    Pagination
  },
  methods: {
    setCheck(checked) {
      this.checked = checked;
    }
  }
};
</script>
