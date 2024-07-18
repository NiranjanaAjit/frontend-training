import apiWithTag from "../../api/employeeApi";

export const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => ({ url: "/employees" }),
      providesTags: ["EMPLOYEE_LIST"],
    }),
    addEmployee: builder.mutation({
      query: (body) => ({
        url: "/employees",
        method: "POST",
        body,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
    editEmployee: builder.mutation({
      query: (payload) => ({
        url: `/employees/${payload.id}`,
        method: "PUT",  
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
    getEmployeeDetails: builder.query({
      query: (id) => ({ url: `/employees/${id}` }),
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});

export const {
  useGetEmployeeListQuery,
  useLazyGetEmployeeListQuery,
  useAddEmployeeMutation,
  useGetEmployeeDetailsQuery,
  useLazyGetEmployeeDetailsQuery,
  useDeleteEmployeeMutation,
  useEditEmployeeMutation,
} = employeeApi;
