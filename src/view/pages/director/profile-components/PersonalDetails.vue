<template>
  <!--begin::Card-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Personal Information
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Update your personal information</span
        >
      </div>
      <!-- <div class="card-toolbar">
        <button
          type="reset"
          class="btn btn-success mr-2"
          @click="save()"
          ref="kt_save_changes"
        >
          Save Changes
        </button>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
          Cancel
        </button>
      </div> -->
    </div>
    <!--end::Header-->
    <!--begin::Form-->
    <form class="form">
      <!--begin::Card-->
      <div class="card card-custom">
        <!--begin::Body-->
        <div class="card-body py-4">
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">Name:</label>
            <div class="col-8">
              <span class="form-control-plaintext font-weight-bolder"
                >Adelaja Dare</span
              >
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">Email:</label>
            <div class="col-8">
              <span class="form-control-plaintext font-weight-bolder"
                >adelaja@gmail.com</span
              >
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">Phone:</label>
            <div class="col-8">
              <span class="form-control-plaintext"
                ><span class="font-weight-bolder">08076533733</span>
              </span>
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">Marital Status:</label>
            <div class="col-8">
              <span class="form-control-plaintext font-weight-bolder"
                >Married</span
              >
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">Gender:</label>
            <div class="col-8">
              <span class="form-control-plaintext font-weight-bolder">
                Male
              </span>
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">NIN Number:</label>
            <div class="col-8">
              <span class="form-control-plaintext font-weight-bolder">
                55554643111
              </span>
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">Country:</label>
            <div class="col-8">
              <span class="form-control-plaintext font-weight-bolder">
                Nigeria
              </span>
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">Date of Birth:</label>
            <div class="col-8">
              <span class="form-control-plaintext font-weight-bolder">
                {{ date_of_birth | moment("Do MMMM YYYY") }}
              </span>
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-4 col-form-label">Address:</label>
            <div class="col-8">
              <span class="form-control-plaintext font-weight-bolder">
                23B Redeemed Street, Chika Lugbe FCT Abuja
              </span>
            </div>
          </div>
        </div>
        <!--end::Body-->
        <!--begin::Footer-->
        <div class="card-footer">
          <!-- <a href="#" class="btn btn-primary font-weight-bold mr-2"
            >Manage company</a
          >
          <a href="#" class="btn btn-light-primary font-weight-bold"
            >Learn more</a
          > -->
        </div>
        <!--end::Footer-->
      </div>
      <!--end::Card-->
    </form>
    <!--end::Form-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";

export default {
  name: "PersonalInformation",
  data() {
    return {
      default_photo: "media/users/blank.png",
      current_photo: null,
      date_of_birth: new Date()
    };
  },
  mounted() {
    this.current_photo = this.currentUserPersonalInfo.photo;
  },
  methods: {
    save() {
      var name = this.$refs.name.value;
      var surname = this.$refs.surname.value;
      var company_name = this.$refs.company_name.value;
      var phone = this.$refs.phone.value;
      var email = this.$refs.email.value;
      var company_site = this.$refs.company_site.value;
      var photo = this.photo;

      // set spinner to submit button
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send update request
        this.$store.dispatch(UPDATE_PERSONAL_INFO, {
          name,
          surname,
          company_name,
          phone,
          email,
          company_site,
          photo
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
    cancel() {
      this.$refs.name.value = this.currentUserPersonalInfo.name;
      this.$refs.surname.value = this.currentUserPersonalInfo.surname;
      this.$refs.company_name.value = this.currentUserPersonalInfo.company_name;
      this.$refs.phone.value = this.currentUserPersonalInfo.phone;
      this.$refs.email.value = this.currentUserPersonalInfo.email;
      this.$refs.company_site.value = this.currentUserPersonalInfo.company_site;
      this.current_photo = this.currentUserPersonalInfo.photo;
    },
    onFileChange(e) {
      const file = e.target.files[0];

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = event => {
          this.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    }
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo"]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    }
  }
};
</script>
