import React from "react";
import {async} from "@babel/runtime/regenerator";
import {API_KEY, API_URL} from "./constants";


export const getOperations = async (id, successCallback) => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"

            }
        })
    } catch (error) {
        console.log(error);
    }
}