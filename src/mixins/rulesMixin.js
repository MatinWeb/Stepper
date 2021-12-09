export default {
    data() {
        return {
            rules: {
                required: (value) => {
                    const errorMessage = "The field is required"
                    return !!value || errorMessage
                },
                maxLength: (value, max) => {
                    const errorMessage = `It must be less than ${max} characters`
                    return !value || value.length <= max || errorMessage
                },
                email: (value) => {
                    const errorMessage = 'Email is invalid'
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return !value || pattern.test(value.trim()) || errorMessage
                },
                phone: (value) => {
                    const errorMessage = 'Phone number is invalid'
                    const pattern = /^(0|[0-9]*)$/
                    return !value || pattern.test(value) || errorMessage
                }
            }
        }
    }
}