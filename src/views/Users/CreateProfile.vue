<template>
    <div>
        <div class="gap"></div>
        <div class="container">
            <div class="col-md">
                <div class="row mb-4">
                    <div class="col-md">
                        <h2 class="text-center">Create here your profile !</h2>
                        <h4 class="text-center">Fill your profile in.</h4>
                    </div>
                </div>
            <div class="gap"></div>
                <!--  -->
            <form v-on:submit.prevent="postProfileInfo">
                <div class="row mb-4">
                    <div class="col-md-4">
                        <h6 class="mt-2 float-right">Full Name *</h6>
                    </div>
                    <div class="col-md">
                        <input 
                        class="form-control inputRadius inputWidth" 
                        type="text" 
                        placeholder="Enter your Full name here"
                        v-model="profileInfo.fullName"
                        required>
                    </div>
                </div>
                <!--  -->
                <div class="row mb-4">
                    <div class="col-md-4">
                        <h6 class="mt-2 float-right">Bio</h6>
                    </div>
                    <div class="col-md">
                        <textarea 
                        class="form-control inputRadius inputWidth" 
                        rows="10" 
                        placeholder="Enter your bio here"
                        v-model="profileInfo.bio"></textarea>
                    </div>
                </div>
                <!--  -->
                <div class="row mb-4">
                    <div class="col-md-4">
                        <h6 class="mt-2 float-right">Your slogan</h6>
                    </div>
                    <div class="col-md">
                        <textarea 
                        class="form-control inputRadius inputWidth" 
                        rows="5" 
                        placeholder="Enter your bio here"
                        v-model="profileInfo.slogan"></textarea>
                    </div>
                </div>
                <!--  -->
                <div class="row mb-4">
                    <div class="col-md-4">
                        <h6 class="mt-2 float-right">Birthday *</h6>
                    </div>
                    <!-- Date -->
                    <div class="col-md-1">
                        <select class="custom-select inputRadius" v-model="profileInfo.birthdayDay" required>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="custom-select inputRadius" v-model="profileInfo.birthdayMonth" required>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select> 
                    </div>
                    <div class="col-md-2">
                        <select class="custom-select inputRadius" v-model="profileInfo.birthdayYear" required>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                        </select>
                    </div>
                </div>
                <!--  -->
                <div class="row mb-4">
                    <div class="col-md-4">
                        <h6 class="mt-2 float-right">Country *</h6>
                    </div>
                    <div class="col-md">
                        <select class="custom-select inputRadius inputWidth" v-model="profileInfo.country" required>
                            <option value="Afganistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bonaire">Bonaire</option>
                            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Canary Islands">Canary Islands</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Channel Islands">Channel Islands</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos Island">Cocos Island</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote DIvoire">Cote DIvoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curaco">Curacao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="East Timor">East Timor</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">Falkland Islands</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Ter">French Southern Ter</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Great Britain">Great Britain</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="India">India</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea North">Korea North</option>
                            <option value="Korea Sout">Korea South</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Laos">Laos</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Midway Islands">Midway Islands</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Nambia">Nambia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherland Antilles">Netherland Antilles</option>
                            <option value="Netherlands">Netherlands (Holland, Europe)</option>
                            <option value="Nevis">Nevis</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau Island">Palau Island</option>
                            <option value="Palestine">Palestine</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Phillipines">Philippines</option>
                            <option value="Pitcairn Island">Pitcairn Island</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Republic of Montenegro">Republic of Montenegro</option>
                            <option value="Republic of Serbia">Republic of Serbia</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="St Barthelemy">St Barthelemy</option>
                            <option value="St Eustatius">St Eustatius</option>
                            <option value="St Helena">St Helena</option>
                            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                            <option value="St Lucia">St Lucia</option>
                            <option value="St Maarten">St Maarten</option>
                            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                            <option value="Saipan">Saipan</option>
                            <option value="Samoa">Samoa</option>
                            <option value="Samoa American">Samoa American</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syria</option>
                            <option value="Tahiti">Tahiti</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Erimates">United Arab Emirates</option>
                            <option value="United States of America">United States of America</option>
                            <option value="Uraguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Vatican City State">Vatican City State</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                            <option value="Wake Island">Wake Island</option>
                            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zaire">Zaire</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                    </div>
                </div>
                <!--  -->
                <div class="row mb-4">
                    <div class="col-md-4">
                        <h6 class="mt-2 float-right">State/Province/Region *</h6>
                    </div>
                    <div class="col-md">
                        <input 
                        class="form-control inputRadius inputWidth" 
                        type="text" 
                        placeholder="Type here"
                        v-model="profileInfo.stateProvinceRegion" required>
                    </div>
                </div>
                <!--  -->
                <div class="links">
                    <h4 class="text-center mt-5 mb-5">External links</h4>
                    <div class="row mb-4 mt-4">
                        <div class="col-md-4">
                            <h6 class="mt-2 float-right">Github username</h6>
                        </div>
                        <div class="col-md">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input 
                                class="form-control inputWidth" 
                                type="text" 
                                placeholder="Paste your username here" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1"
                                v-model="profileInfo.github">
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="row mb-4 mt-4">
                        <div class="col-md-4">
                            <h6 class="mt-2 float-right">Facebook URL</h6>
                        </div>
                        <div class="col-md">
                            <input 
                            class="form-control inputLinks" 
                            type="text" 
                            placeholder="Paste your link here"
                            v-model="profileInfo.facebook">
                        </div>
                    </div>
                    <!--  -->
                    <div class="row mb-4 mt-4">
                        <div class="col-md-4">
                            <h6 class="mt-2 float-right">Instagram username</h6>
                        </div>
                        <div class="col-md">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input 
                                class="form-control inputWidth" 
                                type="text" 
                                placeholder="Paste your username here" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1"
                                v-model="profileInfo.instagram">
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="row mb-4 mt-4">
                        <div class="col-md-4">
                            <h6 class="mt-2 float-right">Twitter username</h6>
                        </div>
                        <div class="col-md">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input 
                                class="form-control inputWidth" 
                                type="text" 
                                placeholder="Paste your username here" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1"
                                v-model="profileInfo.twitter">
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="row mb-4 mt-4">
                        <div class="col-md-4">
                            <h6 class="mt-2 float-right">Linkedin URL</h6>
                        </div>
                        <div class="col-md">
                            <input 
                            class="form-control inputLinks" 
                            type="text" 
                            placeholder="Paste your link here"
                            v-model="profileInfo.linkedin">
                        </div>
                    </div>
                    <!--  -->
                    <div class="row mb-4 mt-4">
                        <div class="col-md-4">
                            <h6 class="mt-2 float-right">Personal website URL</h6>
                        </div>
                        <div class="col-md">
                            <input 
                            class="form-control inputLinks" 
                            type="text" 
                            placeholder="Paste your link here"
                            v-model="profileInfo.personalWebsite">
                        </div>
                    </div>
                    <!--  -->
                    <div class="row mb-4">
                        <div class="col-md-4 mt-2">
                            <h6 class="float-right">Type this email: {{this.user}} *</h6>
                        </div>
                        <div class="col-md">
                            <input 
                            type="text" 
                            class="float-left form-control inputLinks mt-1" 
                            v-model="profileInfo.emailId" 
                            placeholder="Type here the same email"
                            required>
                        </div>
                    </div>
                    <!--  -->
                    <div class="row mb-4 mt-4">
                        <div class="col-md-4">
                            <input 
                            type="checkbox" 
                            class="float-right mt-1" 
                            v-model="profileInfo.verified" 
                            required>
                        </div>
                        <div class="col-md">
                            <h6 class="float-left">Are you a robot ?</h6>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md col-sm">
                        <input type="submit" class="btn btn-primary w-75 submitProject" value="Save"/>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../../Database';

export default {
    data() {
        return {
            isLoggedIn: false,
            currentUser: false,
            user: '',
            profileInfo: {
                http: 'http://',
                fullName: '',
                bio: '',
                slogan: '',
                birthdayDay:'',
                birthdayMonth: '',
                birthdayYear: '',
                country: '',
                stateProvinceRegion: '',
                github: '',
                facebook: '',
                instagram: '',
                twitter: '',
                linkedin: '',
                personalWebsite: '',
                emailId: '',
                verified: false
            }
        }
    },
    firebase: {
        userProfile: db.ref('userProfile')
    },
    methods: {
        postProfileInfo() {
            this.verified = true;
            if (firebase.auth().currentUser.email == this.user) {
                console.log('User email is the same');
                if (this.user == this.profileInfo.emailId) {
                    console.log(JSON.stringify(this.profileInfo));
                    this.$firebaseRefs.userProfile.push({
                        fullName: this.profileInfo.fullName,
                        bio: this.profileInfo.bio,
                        slogan: this.profileInfo.slogan,
                        birthdayDay: this.profileInfo.birthdayDay,
                        birthdayMonth: this.profileInfo.birthdayMonth,
                        birthdayYear: this.profileInfo.birthdayYear,
                        country: this.profileInfo.country,
                        stateProvinceRegion: this.profileInfo.stateProvinceRegion,
                        github: this.profileInfo.github,
                        facebook: this.profileInfo.facebook,
                        instagram: this.profileInfo.instagram,
                        twitter: this.profileInfo.twitter,
                        linkedin: this.profileInfo.linkedin,
                        personalWebsite: this.profileInfo.http + this.profileInfo.personalWebsite,
                        emailId: this.profileInfo.emailId,
                        verified: this.profileInfo.verified
                    })
                    this.$router.push('/Profile')
                    location.reload();
                } else {
                    alert('Email is not the same');
                }
            }
        }
    },
    mounted() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.user = firebase.auth().currentUser.email;
        }
        firebase.auth().onAuthStateChanged(currentUser => {
            if (currentUser) {
                this.user = firebase.auth().currentUser.email;
                this.isLoggedIn = true;
            } else {
                this.$router.push('/Login')
            }
        });
    }
}
</script>