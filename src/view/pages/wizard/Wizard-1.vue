<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <!--begin: Wizard Nav-->
        <div class="wizard-nav border-bottom">
          <div class="wizard-steps p-8 p-lg-10">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div class="wizard-label">
                <i class="wizard-icon flaticon-profile-1"></i>
                <h3 class="wizard-title">1. User Details</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-users"></i>
                <h3 class="wizard-title">2. Next of Kin</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-suitcase"></i>
                <h3 class="wizard-title">3. Work Experience</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-trophy"></i>
                <h3 class="wizard-title">4. Education and Qualifications</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-photo-camera"></i>
                <h3 class="wizard-title">5. Profile Photo</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-globe"></i>
                <h3 class="wizard-title">6. Review and Submit</h3>
              </div>
              <i class="wizard-arrow last flaticon2-next"></i>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav-->

        <!--begin: Wizard Body-->
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-xl-12 col-xxl-7">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form" @submit.prevent="submitData">
              <!--begin: Wizard Step 1-->
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <h3 class="mb-10 font-weight-bold text-dark">
                  Personal Information
                </h3>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>First Name</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="firstname"
                        placeholder="First Name"
                        v-model="firstname"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("firstname")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user firstname.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="lastname"
                        placeholder="Last Name"
                        v-model="lastname"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("lastname")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user lastname.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Phone</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="phone"
                        placeholder="Phone"
                        v-model="phone"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("phone")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user phone number.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="email"
                        placeholder="Email Address"
                        v-model="email"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("email")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user email address.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Country</label>
                      <select
                        name="country"
                        class="form-control form-control-solid form-control-lg"
                        v-model="country"
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                      >
                        <option value="">Select</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Åland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU" selected>Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO"
                          >Bolivia, Plurinational State of</option
                        >
                        <option value="BQ"
                          >Bonaire, Sint Eustatius and Saba</option
                        >
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO"
                          >British Indian Ocean Territory</option
                        >
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD"
                          >Congo, the Democratic Republic of the</option
                        >
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Côte d'Ivoire</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curaçao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM"
                          >Heard Island and McDonald Islands</option
                        >
                        <option value="VA"
                          >Holy See (Vatican City State)</option
                        >
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP"
                          >Korea, Democratic People's Republic of</option
                        >
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA"
                          >Lao People's Democratic Republic</option
                        >
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK"
                          >Macedonia, the former Yugoslav Republic of</option
                        >
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM"
                          >Micronesia, Federated States of</option
                        >
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS"
                          >Palestinian Territory, Occupied</option
                        >
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Réunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthélemy</option>
                        <option value="SH"
                          >Saint Helena, Ascension and Tristan da Cunha</option
                        >
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC"
                          >Saint Vincent and the Grenadines</option
                        >
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten (Dutch part)</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS"
                          >South Georgia and the South Sandwich Islands</option
                        >
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM"
                          >United States Minor Outlying Islands</option
                        >
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE"
                          >Venezuela, Bolivarian Republic of</option
                        >
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                      <span class="text-danger text-sm">{{
                        errors.first("country")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter select user country.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Address</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="address"
                        placeholder="Address"
                        v-model="address"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("address")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user Address.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Date of Birth</label>
                      <datepicker
                        v-model="date_of_birth"
                        placeholder="Date of Birth"
                        name="date_of_birth"
                        input-class="form-control form-control-solid form-control-lg"
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                      ></datepicker>
                      <span class="text-danger text-sm">{{
                        errors.first("date_of_birth")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please select user date of birth.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Gender</label>
                      <select
                        name="gender"
                        class="form-control form-control-solid form-control-lg"
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
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>NIN Number</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="nin"
                        placeholder="NIN Number"
                        v-model="nin"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("nin")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user NIN number.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Marital Status</label>
                      <select
                        name="marital_status"
                        class="form-control form-control-solid form-control-lg"
                        v-model="marital_status"
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                      >
                        <option selected disabled>Select</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                        <option value="Widow">Widow</option>
                        <option value="Widower">Widower</option>
                      </select>
                      <span class="text-danger text-sm">{{
                        errors.first("marital_status")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please select user marital status.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 1-->

              <!--begin: Wizard Step 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Next of Kin
                </h4>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Next of Kin First Name</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="next_of_kin_firstname"
                        placeholder="First Name"
                        v-model="next_of_kin_firstname"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("next_of_kin_firstname")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user next of kin firstname.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Next of Kin Last Name</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="next_of_kin_lastname"
                        placeholder="Last Name"
                        v-model="next_of_kin_lastname"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("next_of_kin_lastname")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user next of kin lastname.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Next of Kin Phone</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="next_of_kin_phone"
                        placeholder="Phone"
                        v-model="next_of_kin_phone"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("next_of_kin_phone")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user next of kin phone.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Next of Kin Email</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="next_of_kin_email"
                        placeholder="Email Address"
                        v-model="next_of_kin_email"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("next_of_kin_email")
                      }}</span>
                      <span class="form-text text-muted"
                        >Please enter user next of kin email.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Next of Kin Address</label>
                  <input
                    v-validate="'required'"
                    data-vv-validate-on="blur"
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="next_of_kin_address"
                    placeholder="Address"
                    v-model="next_of_kin_address"
                  />
                  <span class="text-danger text-sm">{{
                    errors.first("next_of_kin_address")
                  }}</span>
                  <span class="form-text text-muted"
                    >Please enter user next of kin address.</span
                  >
                </div>
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Step 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Work Experience
                  <a href="#" class="float-right" @click="addNewWork"
                    ><i class="flaticon-plus icon-lg text-info"></i
                  ></a>
                </h4>
                <div v-for="(wrk, index) in work" :key="index">
                  <hr v-if="index !== 0" />
                  <a
                    v-if="index !== 0"
                    href="#"
                    class="float-right"
                    @click="removeWork"
                    ><i class="flaticon-delete icon-lg text-danger"></i
                  ></a>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Job Title</label>
                        <input
                          v-validate="'required'"
                          data-vv-validate-on="blur"
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="job_title"
                          placeholder="Job Title"
                          v-model="wrk.job_title"
                        />
                        <span class="text-danger text-sm">{{
                          errors.first("job_title")
                        }}</span>
                        <span class="form-text text-muted"
                          >Please enter job title.</span
                        >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Name of Organization</label>
                        <input
                          v-validate="'required'"
                          data-vv-validate-on="blur"
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="organization"
                          placeholder="Name of Organization"
                          v-model="wrk.organization"
                        />
                        <span class="text-danger text-sm">{{
                          errors.first("organization")
                        }}</span>
                        <span class="form-text text-muted"
                          >Please enter name of organization.</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>From</label>
                        <datepicker
                          v-model="wrk.start_date"
                          placeholder="From"
                          name="start_date"
                          input-class="form-control form-control-solid form-control-lg"
                          v-validate="'required'"
                          data-vv-validate-on="blur"
                        ></datepicker>
                        <span class="text-danger text-sm">{{
                          errors.first("start_date")
                        }}</span>
                        <span class="form-text text-muted"
                          >Please select start date.</span
                        >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>To</label>
                        <datepicker
                          v-model="wrk.end_date"
                          placeholder="To"
                          name="end_date"
                          input-class="form-control form-control-solid form-control-lg"
                          v-validate="'required'"
                          data-vv-validate-on="blur"
                        ></datepicker>
                        <span class="text-danger text-sm">{{
                          errors.first("end_date")
                        }}</span>
                        <span class="form-text text-muted"
                          >Please select end date.</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 3-->

              <!--begin: Wizard Step 4-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Education and Qualifications
                  <a href="#" class="float-right" @click="addNewEducation"
                    ><i class="flaticon-plus icon-lg text-info"></i
                  ></a>
                </h4>
                <div v-for="(edu, index) in education" :key="index">
                  <hr v-if="index !== 0" />
                  <a
                    v-if="index !== 0"
                    href="#"
                    class="float-right"
                    @click="removeEducation"
                    ><i class="flaticon-delete icon-lg text-danger"></i
                  ></a>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Education Level</label>
                        <select
                          name="type_of_cert"
                          class="form-control form-control-solid form-control-lg"
                          v-model="edu.type_of_cert"
                          v-validate="'required'"
                          data-vv-validate-on="blur"
                        >
                          <option selected disabled>Select</option>
                          <option value="Primary">Primary</option>
                          <option value="Secondary">Secondary</option>
                          <option value="Tertiary">Tertiary</option>
                          <option value="PhD">PhD</option>
                        </select>
                        <span class="text-danger text-sm">{{
                          errors.first("type_of_cert")
                        }}</span>
                        <span class="form-text text-muted"
                          >Please select user education level.</span
                        >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Name of Institution</label>
                        <input
                          v-validate="'required'"
                          data-vv-validate-on="blur"
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="institution"
                          placeholder="Name of Institution"
                          v-model="edu.institution"
                        />
                        <span class="text-danger text-sm">{{
                          errors.first("institution")
                        }}</span>
                        <span class="form-text text-muted"
                          >Please enter user name of institution.</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Certificate</label>
                    <input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="certificate"
                      placeholder="Certificate"
                      v-model="edu.certificate"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("certificate")
                    }}</span>
                    <span class="form-text text-muted"
                      >Please enter user certificate title.</span
                    >
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>From</label>
                        <datepicker
                          v-model="edu.education_start_date"
                          placeholder="From"
                          name="education_start_date"
                          input-class="form-control form-control-solid form-control-lg"
                          v-validate="'required'"
                          data-vv-validate-on="blur"
                        ></datepicker>
                        <span class="text-danger text-sm">{{
                          errors.first("education_start_date")
                        }}</span>
                        <span class="form-text text-muted"
                          >Please select start date.</span
                        >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>To</label>
                        <datepicker
                          v-model="edu.education_end_date"
                          placeholder="To"
                          name="education_end_date"
                          input-class="form-control form-control-solid form-control-lg"
                          v-validate="'required'"
                          data-vv-validate-on="blur"
                        ></datepicker>
                        <span class="text-danger text-sm">{{
                          errors.first("education_end_date")
                        }}</span>
                        <span class="form-text text-muted"
                          >Please select end date.</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 4-->

              <!--begin: Wizard Step 5-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Profile Photo
                </h4>
                <!--begin: Datatable -->
                <div class="row">
                  <div class="col-xl-6">
                    <div style="margin-left: 20%">
                      <p>How to take a good photo:</p>
                      <div>
                        <img
                          style="height:150px;"
                          src="/media/logos/photoguide.png"
                          alt="User Icon"
                          class="mr-3"
                        />

                        <ol>
                          <li>Ensure you are in a bright room</li>
                          <li>
                            Ensure the person's face is centred in the camera
                            window
                          </li>
                          <li>Ensure your the face is showing clearly</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div style="margin-left: 30%">
                      <img
                        style="padding-top: 10px"
                        v-if="!videoShowing && !image"
                        v-on:click="startCamera()"
                        src="media/logos/upload.png"
                      />
                      <video
                        ref="video"
                        id="video"
                        v-show="!image && !photoSaved"
                        style="height:1px;width:250px;margin-bottom:20px;"
                        autoplay
                      ></video>
                      <div align="center">
                        <canvas
                          ref="canvas"
                          id="canvas"
                          width="250"
                          height="187"
                          v-show="image"
                        >
                        </canvas>
                      </div>

                      <a
                        href="#"
                        id="snap"
                        v-if="!image && !photoSaved && !videoShowing"
                        class="btn btn-success orange"
                        v-on:click="startCamera()"
                      >
                        Take Photo Now
                      </a>

                      <a
                        href="#"
                        id="snap"
                        v-if="!image && !photoSaved && videoShowing"
                        class="btn btn-success orange"
                        v-on:click="capture()"
                      >
                        Snap Photo
                      </a>

                      <div
                        class="row"
                        v-if="!photoLoading"
                        style="padding-top: 15px"
                      >
                        <div style="margin-left: 32%">
                          <a
                            href="#"
                            id="snap"
                            v-if="image && !photoSaved"
                            class="btn btn-success orange"
                            v-on:click="snapAgain()"
                          >
                            Snap Again
                          </a>
                        </div>
                      </div>

                      <div
                        class="row"
                        v-if="photoLoading"
                        style="padding-top: 15px;margin-left: 35%"
                      >
                        <div
                          class="kt-spinner kt-spinner--md kt-spinner--info"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end: Datatable -->
              </div>
              <!--end: Wizard Step 5-->

              <!--begin: Wizard Step 6-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Review your Details and Submit
                </h4>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">
                    Personal Details:
                  </div>
                  <div class="line-height-md">
                    <span class="font-weight-bolder mr-2">Fullname:</span>
                    {{ firstname }} {{ lastname }}
                    <br />
                    <span class="font-weight-bolder mr-2">Email:</span>
                    {{ email }} <br />
                    <span class="font-weight-bolder mr-2">Phone:</span>
                    {{ phone }} <br />
                    <span class="font-weight-bolder mr-2">Date of Birth:</span>
                    {{ date_of_birth | moment("ddd, MMM Do YYYY") }} <br />
                    <span class="font-weight-bolder mr-2">Gender:</span>
                    {{ gender }} <br />
                    <span class="font-weight-bolder mr-2">Marital Status:</span>
                    {{ marital_status }} <br />
                    <span class="font-weight-bolder mr-2">NIN:</span> {{ nin }}
                    <br />
                    <span class="font-weight-bolder mr-2">Country:</span>
                    {{ country }} <br />
                    <span class="font-weight-bolder mr-2">Address:</span>
                    {{ address }}
                  </div>
                </div>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">
                    Next of Kin Details:
                  </div>
                  <div class="line-height-md">
                    <span class="font-weight-bolder mr-2">Name:</span>
                    {{ next_of_kin_firstname }} {{ next_of_kin_lastname }}
                    <br />
                    <span class="font-weight-bolder mr-2">Phone:</span>
                    {{ next_of_kin_phone }} <br />
                    <span class="font-weight-bolder mr-2">Email:</span>
                    {{ next_of_kin_email }} <br />
                    <span class="font-weight-bolder mr-2">Address:</span>
                    {{ next_of_kin_address }}
                  </div>
                </div>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">
                    Work Experience:
                  </div>
                  <div
                    class="line-height-md"
                    v-for="(wrk, index) in work"
                    :key="index"
                  >
                    <span class="font-weight-bolder mr-2">Job Title:</span>
                    {{ wrk.job_title }}
                    <br />
                    <span class="font-weight-bolder mr-2">Organization:</span>
                    {{ wrk.organization }} <br />
                    <span class="font-weight-bolder mr-2">Date:</span>
                    {{ wrk.start_date | moment("ddd, MMM Do YYYY") }}
                    <span class="font-weight-bold">to</span>
                    {{ wrk.end_date | moment("ddd, MMM Do YYYY") }} <br />
                  </div>
                </div>
                <div class="mb-5">
                  <div class="font-weight-bold mb-3">
                    Education & Qualifications:
                  </div>
                  <div
                    class="line-height-md"
                    v-for="(edu, index) in education"
                    :key="index"
                  >
                    <span class="font-weight-bolder mr-2"
                      >Education Level:</span
                    >
                    {{ edu.type_of_cert }}
                    <br />
                    <span class="font-weight-bolder mr-2">Institution:</span>
                    {{ edu.institution }} <br />
                    <span class="font-weight-bolder mr-2">Certificate:</span>
                    {{ edu.certificate }} <br />
                    <span class="font-weight-bolder mr-2">Date:</span>
                    {{ edu.education_start_date | moment("ddd, MMM Do YYYY") }}
                    <span class="font-weight-bolder">to</span>
                    {{ edu.education_end_date | moment("ddd, MMM Do YYYY") }}
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 5-->

              <!--begin: Wizard Actions -->
              <div class="d-flex justify-content-between border-top pt-10">
                <div class="mr-2">
                  <button
                    class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-prev"
                  >
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    v-on:click="submitData"
                    class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-submit"
                  >
                    Submit
                  </button>
                  <button
                    class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-next"
                  >
                    Next Step
                  </button>
                </div>
              </div>
              <!--end: Wizard Actions -->
            </form>
            <!--end: Wizard Form-->
          </div>
        </div>
        <!--end: Wizard Body-->
      </div>
    </div>
    <!--end: Wizard-->
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
// import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import Datepicker from "vuejs-datepicker";
export default {
  name: "Wizard-1",
  mounted() {
    // this.$store.dispatch(SET_BREADCRUMB, [
    //   { title: "Wizard" },
    //   { title: "Wizard-1" }
    // ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v1", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  data() {
    return {
      // personal details
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      address: "",
      date_of_birth: "",
      gender: "",
      marital_status: "",
      nin: "",
      country: "",
      // next of kin
      next_of_kin_firstname: "",
      next_of_kin_lastname: "",
      next_of_kin_phone: "",
      next_of_kin_email: "",
      next_of_kin_address: "",
      // work experience
      work: [
        {
          job_title: "",
          organization: "",
          start_date: "",
          end_date: ""
        }
      ],
      // education
      education: [
        {
          type_of_cert: "",
          institution: "",
          certificate: "",
          education_start_date: "",
          education_end_date: ""
        }
      ],
      // photo
      showFinish: false,
      videoShowing: false,
      photoSaved: false,
      photoLoading: false,
      video: {},
      canvas: {},
      image: ""
    };
  },
  components: {
    Datepicker
  },
  methods: {
    submitData() {
      Swal.fire({
        title: "",
        text: "The data has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      });
    },

    addNewWork() {
      this.work.push({
        job_title: "",
        organization: "",
        start_date: "",
        end_date: "",
        responsibilities: ""
      });
    },

    removeWork(index) {
      this.work.splice(index, 1);
    },

    addNewEducation() {
      this.education.push({
        type_of_cert: "",
        institution: "",
        certificate: "",
        education_start_date: "",
        education_end_date: ""
      });
    },

    removeEducation(index) {
      this.education.splice(index, 1);
    },

    startCamera() {
      this.toggleVideoShowing();
      this.video = this.$refs.video;
      this.video.style = "display:block;width:250px;margin-bottom:20px;";
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.srcObject = stream;
          this.video.play();
        });
      }
    },

    capture() {
      this.canvas = this.$refs.canvas;
      this.canvas.getContext("2d").drawImage(this.video, 0, 0, 250, 187);
      this.image = this.canvas.toDataURL();
      // this.toggleVideoShowing();
    },
    snapAgain() {
      this.image = null;
    },
    toggleVideoShowing() {
      this.videoShowing = !this.videoShowing;
    },

    uploadPatientPic() {}
  }
};
</script>
