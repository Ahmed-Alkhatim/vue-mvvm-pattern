import { reactive } from "vue";
import { UsersApi } from "../../api";

const useApiStates = () => {

    // Events
    const responseEvents = reactive({
        userNotAdded : () => {},
        userAdded : () => {},
        usersNotFetched : () => {},
        usersFetched : () => {},
    })
    const onFetchUsersSuccess = (callback) => { responseEvents.usersFetched = callback}
    const onFetchUsersFailure = (callback) => { responseEvents.usersNotFetched = callback}

    const onAddUserSuccess = (callback) => { responseEvents.userAdded = callback}
    const onAddUserFailure = (callback) => { responseEvents.userNotAdded = callback}

    UsersApi.on('fetchSuccess', () => {
        responseEvents.usersFetched()
    })
    UsersApi.on('fetchFailure', () => {
        responseEvents.usersNotFetched()
    });

    UsersApi.on('addUserSuccess', () => {
        responseEvents.userAdded()
    });
    UsersApi.on('addUserFailure', () => {
        responseEvents.userNotAdded()
    });

    // Methods
    const fetchUsers = () => {
        UsersApi.fetchUsers()
    }

    const addUser = (data) => {
        UsersApi.addUser(data)
    }

    return { fetchUsers, onFetchUsersSuccess, onFetchUsersFailure, onAddUserSuccess, onAddUserFailure, addUser }
}

export default useApiStates