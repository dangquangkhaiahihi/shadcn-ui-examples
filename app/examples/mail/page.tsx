import { cookies } from "next/headers"
import Image from "next/image"

import { Mail } from "@/app/examples/mail/components/mail"
import { accounts, mails } from "@/app/examples/mail/data"

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  // const defaultLayout = layout ? JSON.parse(layout?.value || "") : undefined
  // const defaultCollapsed = collapsed ? JSON.parse(collapsed?.value || "") : undefined

  const defaultLayout = undefined;
  const defaultCollapsed = undefined;

  console.log("layout cookies", layout);
  console.log("collapsed cookies", collapsed);

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
