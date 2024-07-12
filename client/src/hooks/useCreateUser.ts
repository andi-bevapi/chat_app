import { useMutation, gql } from "@apollo/client";


const CREATE_USER = gql`
mutation CreateUser($createUserData:CreateUserInput!){
createUser(createUserData: $createUserData){
		 id
		 email
		}
	}
`

const useCreateUser = () => {
	return useMutation(CREATE_USER)
}