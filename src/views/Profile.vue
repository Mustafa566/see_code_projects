<template>
    <div>
        <h1>Profile</h1>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        }
    },
    created() {
        if (this.isLoggedIn == false) {
            this.$router.push('/Login')
        }
    }
}
</script>