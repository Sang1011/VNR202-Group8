import { Timeline } from "@/components/timeline"

export function Home() {
  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
          Lịch sử Việt Nam từ Đại hội VIII đến nay
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Việt Nam sau khi giành độc lập và thống nhất đất nước bước vào giai đoạn xây dựng và phát triển. Từ Đại hội
          VIII (1996) đến nay, Đảng Cộng sản Việt Nam đã từng bước đổi mới tư duy lãnh đạo, định hình mô hình phát triển
          kinh tế – xã hội, và hội nhập sâu rộng với thế giới.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-7xl">
        <Timeline />
      </section>
    </div>
  )
}
