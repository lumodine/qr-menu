export default async function NotFoundPage() {
  return (
    <div className="grid h-screen px-4 place-content-center">
      <div className="text-center">
        <h1 className="font-black text-4xl">
          Sayfa bulunamadı!
        </h1>

        <p className="mt-4 text-muted-foreground">
        Üzgünüz, gitmeye çalıştığınız sayfayı bulamadık.
        </p>
      </div>
    </div>
  )
}
