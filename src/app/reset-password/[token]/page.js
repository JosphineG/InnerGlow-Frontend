"use client";
import PasswordReset from "../../components/PasswordReset";
import { useParams } from "next/navigation";

export default function ExampleClientComponent() {
  const params = useParams();
  console.log(params);

  return (
    <div className="">
      <PasswordReset token={params.token} />
    </div>
  );
}
