"use client";
import UpdateUserMember from "@/components/form/UpdateUserMember";
import useAxios from "@/hooks/useAxios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const axios = useAxios();
  const { id } = useParams();

  useEffect(() => {
    (async function (id) {
      try {
        const { data } = await axios.get(`/user/${id}`);
        if (data.success) {
          console.log(data?.user);

          setUser(data?.user);
        } else {
          console.log("Somthin wrong");
        }
      } catch (error) {
        console.log(error?.message);
      }
    })(id);
  }, [id]);
  return (
    <div>
      <UpdateUserMember user={user} />
    </div>
  );
};

export default UpdateUser;
