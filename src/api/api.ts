// Importing axios package to make HTTP requests
import axios from "axios";

// Defining the base URL for the JSON server API
const urlServer = "https://my-json-server.typicode.com/Cunegundess/serverTeste";

// Defining the dataFake type that represents the structure of the data returned from the "/dataFake" endpoint of the server
export type dataFake = {
  readonly id: string; // a required string field that contains the unique identifier of the data
  nickname: string; // a string field that contains the nickname of the data
  followers: number; // a number field that contains the number of followers of the data
  followersOverview: number; // a number field that contains the overview of followers of the data
  readonly type: string; // a required string field that contains the type of the data
  status: boolean; // a boolean field that indicates the status of the data
};

// Defining the fakeOverviewData type that represents the structure of the data returned from the "/fakeOverview" endpoint of the server
export type fakeOverviewData = {
  readonly id: string; // a required string field that contains the unique identifier of the data
  title: string; // a string field that contains the title of the data
  total: number; // a number field that contains the total of the data
  percent: number; // a number field that contains the percentage of the data
  readonly type: string; // a required string field that contains the type of the data
  status: boolean; // a boolean field that indicates the status of the data
};

// Defining the fetchData function that makes an HTTP GET request to the provided URL and returns the response data
export async function fetchData<T>(url: string): Promise<T[]> {
  try {
    const response = await axios.get<T[]>(url); // Making an HTTP GET request using axios package
    return response.data; // Returning the response data
  } catch (error) {
    console.error(error); // Logging the error to the console
    return []; // Returning an empty array in case of error
  }
}

// Defining the getDataFake function that returns an array of dataFake objects obtained from the server
export async function getDataFake(): Promise<dataFake[]> {
  const dataUrl = `${urlServer}/dataFake`; // Constructing the URL for the "/dataFake" endpoint
  return await fetchData<dataFake>(dataUrl); // Making an HTTP GET request to the "/dataFake" endpoint and returning the response data as an array of dataFake objects
}

// Defining the getFakeOverviewData function that returns an array of fakeOverviewData objects obtained from the server
export async function getFakeOverviewData(): Promise<fakeOverviewData[]> {
  const overviewUrl = `${urlServer}/fakeOverview`; // Constructing the URL for the "/fakeOverview" endpoint
  return await fetchData<fakeOverviewData>(overviewUrl); // Making an HTTP GET request to the "/fakeOverview" endpoint and returning the response data as an array of fakeOverviewData objects
}
