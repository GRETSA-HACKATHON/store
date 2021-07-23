import {InMemoryCache} from "@apollo/client";
// import {breadCrumbList,cardData} from "./reactiveVariables";

export const ApolloCache = new InMemoryCache({
    typePolicies:{
        Query:{
            fields:{
                
            }
        }
    }
})