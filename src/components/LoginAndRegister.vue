<template>
    <div>
        <div class="mt-5 loginMain" v-if="seen">
            <div class="row redBackGround loginHeader whiteText">
                <div class="col text-center border-right pointer" @click="seen = true">Login</div>
                <div class="col text-center pointer" @click="seen = false">Register</div>
            </div>
            <h3 class="text-center redText mt-5">Login</h3>
            <div class="row mt-5">
                <div class="col">
                    <input type="text" class="form-control w-75 horizonCenter" placeholder="Email *">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <input type="password" class="form-control w-75 horizonCenter" placeholder="Password *">
                </div>
            </div>
            <div class="row mt-1 ml-5">
                <div class="col">
                    <p class="redText">Forgot my password</p>
                </div>
            </div>
            <div class="row mt-2 mr-5 float-right">
                <div class="col">
                    <div class="btn redBackGround whiteText">Login</div>
                </div>
            </div>
        </div>

        <div class="mt-5 loginMain" v-if="!seen">
            <div class="row redBackGround loginHeader whiteText">
                <div class="col text-center border-right pointer" @click="seen = true">Login</div>
                <div class="col text-center pointer" @click="seen = false">Register</div>
            </div>
            <h3 class="text-center redText mt-5">Register</h3>
            <div class="row mt-5">
                <div class="col">
                    <input type="text" class="form-control w-75 horizonCenter" placeholder="Email *">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <input type="password" class="form-control w-75 horizonCenter" placeholder="Password *">
                </div>
            </div>
            <div class="row mt-5 mr-5 float-right">
                <div class="col">
                    <div class="btn redBackGround whiteText">Register</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seen: true
        }
    }
}
</script>