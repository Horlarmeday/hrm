<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom card-sticky" id="kt_page_sticky_card">
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label">
            Create Staff Account <i class="mr-2"></i>
            <small class=""></small>
          </h3>
        </div>
        <div class="card-toolbar">
          <!-- <a
            href="#"
            @click="$router.go(-1)"
            class="btn btn-light-primary font-weight-bolder mr-2"
          >
            <i class="ki ki-long-arrow-back icon-sm"></i>
            Back
          </a> -->
        </div>
      </div>
      <div class="card-body">
        <!--begin::Form-->
        <form class="form" id="kt_form">
          <div class="row">
            <div class="col-xl-2"></div>
            <div class="col-xl-8">
              <div class="my-5">
                <h3 class="text-dark font-weight-bold mb-10">Employee Info:</h3>
                <div class="form-group row">
                  <label class="col-3">First Name</label>
                  <div class="col-9">
                    <input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      class="form-control form-control-solid"
                      type="text"
                      name="firstname"
                      v-model="firstname"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("firstname")
                    }}</span>
                    <span class="form-text text-muted"
                      >Please enter staff firstname.</span
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-3">Last Name</label>
                  <div class="col-9">
                    <input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      class="form-control form-control-solid"
                      type="text"
                      name="lastname"
                      v-model="lastname"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("lastname")
                    }}</span>
                    <span class="form-text text-muted"
                      >Please enter staff lastname.</span
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-3">Email</label>
                  <div class="col-9">
                    <input
                      v-validate="'required|email'"
                      data-vv-validate-on="blur"
                      class="form-control form-control-solid"
                      type="email"
                      name="email"
                      v-model="email"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("email")
                    }}</span>
                    <span class="form-text text-muted"
                      >Please enter staff email.</span
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-3">Phone</label>
                  <div class="col-9">
                    <input
                      maxlength="11"
                      v-validate="'required|max:11|min:11'"
                      data-vv-validate-on="blur"
                      type="text"
                      class="form-control form-control-solid"
                      name="phone"
                      v-model="phone"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("phone")
                    }}</span>
                    <span class="form-text text-muted"
                      >Please enter staff phone.</span
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-3">Address</label>
                  <div class="col-9">
                    <input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      type="text"
                      class="form-control form-control-solid"
                      name="address"
                      v-model="address"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("address")
                    }}</span>
                    <span class="form-text text-muted"
                      >Please enter staff address.</span
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-3">Gender</label>
                  <div class="col-9">
                    <select
                      name="gender"
                      class="form-control form-control-solid"
                      v-model="gender"
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                    >
                      <option selected disabled>Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <span class="text-danger text-sm">{{
                      errors.first("gender")
                    }}</span>
                    <span class="form-text text-muted"
                      >Please select user gender.</span
                    >
                  </div>
                </div>
              </div>
              <div class="separator separator-dashed my-10"></div>
              <button
                @click="submitData"
                class="btn btn-success float-right font-weight-bold text-uppercase px-9 py-4"
              >
                Submit
              </button>
            </div>
            <div class="col-xl-2"></div>
          </div>
        </form>
        <!--end::Form-->
      </div>
    </div>
    <!--end::Card-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      gender: "",
      address: ""
    };
  },
  methods: {
    submitData() {}
  }
};
</script>

<style></style>
