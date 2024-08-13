import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div>
        <Image src="/logo.png" alt="logo" height={48} width={48} />
      </div>
      <span className="font-bold">Akshay Patil</span>
    </div>
  );
}
