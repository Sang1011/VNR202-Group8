"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Flag, TrendingUp, Globe, Building2, FileText, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { XCircle, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { timelineData } from "@/data/timelineData"

export function Timeline() {
  const [selectedItem, setSelectedItem] = useState<typeof timelineData[number] | null>(null)
  const [showDetailedContent, setShowDetailedContent] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  
  return (
    <div className="relative mx-auto max-w-7xl px-4">
      {/* Start Label */}
      <div className="mb-8 flex justify-center">
        <div className="rounded-lg border-2 border-primary bg-background px-6 py-2 font-bold text-primary shadow-md">
          BẮT ĐẦU
        </div>
      </div>

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-20 bottom-20 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-amber-500 to-emerald-500" />

      {/* Timeline Items */}
      <div className="relative space-y-12">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0
          const Icon = item.icon

          return (
            <div key={item.id} className="relative">
              {/* Center Circle */}
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-4 bg-background",
                    item.borderColor,
                  )}
                >
                  <Icon className={cn("h-5 w-5", item.textColor)} />
                </div>
              </div>

              {/* Content Card */}
              <div className={cn("relative w-[calc(50%-3rem)]", isLeft ? "mr-auto pr-4" : "ml-auto pl-4")}>
                {/* Dotted Line */}
                <div
                  className={cn(
                    "absolute top-6 h-0.5 w-8 border-t-2 border-dashed border-muted-foreground/50",
                    isLeft ? "right-0" : "left-0",
                  )}
                />

                <div
                  className={cn(
                    "cursor-pointer rounded-xl border bg-card p-5 shadow-lg transition-all hover:shadow-xl",
                  )}
                  onClick={() => {
                    setSelectedItem(item)
                  }}
                >
                  {/* Year Badge */}
                  <div
                    className={cn("mb-3 inline-block rounded-full px-4 py-1 text-sm font-bold text-white", item.color)}
                  >
                    {item.year}
                  </div>

                  <div>
                    <img src={item.image} alt={item.title} className="mb-4 h-60 w-full rounded-lg object-cover" />
                  </div>

                  {/* Title */}
                  <h3 className={cn("mb-2 text-lg font-bold", item.textColor)}>{item.title}</h3>

                  {/* Summary */}
                  <p className="mb-3 text-sm text-muted-foreground">{item.summary}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative grid max-h-[100vh] w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-background shadow-xl md:grid-cols-[400px_1fr]">

            <div className="relative hidden md:block">
              <Image
                src={selectedItem.content.image || "/fallback-image.png"}
                alt={selectedItem.title}
                fill
                className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
                priority
                onClick={() => setIsImageZoomed(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              
              {/* Zoom hint */}
              <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                Click để phóng to
              </div>

              {selectedItem.contentNext && (
                <div className="absolute bottom-4 left-4 right-4 flex space-x-2 rounded-lg bg-black/50 p-1 backdrop-blur-sm">
                  <button
                    onClick={() => setShowDetailedContent(false)}
                    className={cn(
                      "flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                      !showDetailedContent
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-white/70 hover:bg-white/10"
                    )}
                  >
                    Thông tin chung
                  </button>
                  <button
                    onClick={() => setShowDetailedContent(true)}
                    className={cn(
                      "flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                      showDetailedContent
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-white/70 hover:bg-white/10"
                    )}
                  >
                    Chi tiết Nghị quyết
                  </button>
                </div>
              )}
            </div>

            {/* ===== RIGHT: CONTENT (Đã Cập nhật logic hiển thị chi tiết) ===== */}
            <div className="relative max-h-[90vh] overflow-y-auto p-6">
              {/* Close */}
              <button
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground cursor-pointer text-2xl font-bold z-10"
                onClick={() => {
                  setShowDetailedContent(false);
                  setIsImageZoomed(false);
                  setSelectedItem(null)
                }}
              >
                ✕
              </button>

              {/* Header (Hiển thị cố định) */}
              <div className="mb-6">
                <span
                  className={cn(
                    "inline-block rounded-full px-4 py-1 text-sm font-bold text-white",
                    selectedItem.color
                  )}
                >
                  {selectedItem.year}
                </span>
                <h2 className="mt-2 text-2xl font-bold">{selectedItem.title}</h2>
                <p className="mt-1 text-muted-foreground">{selectedItem.summary}</p>
              </div>

              {/* Logic hiển thị nội dung chính hoặc nội dung chi tiết */}
              <div className="space-y-6">
                {!showDetailedContent ? (
                  // --- NỘI DUNG CHÍNH (content) - Áp dụng chung cho mọi Đại hội ---
                  <>
                    {/* Bối cảnh */}
                    <div className="rounded-xl border bg-muted/30 p-4">
                      <h3 className="mb-3 font-bold">Bối cảnh</h3>
                      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
                        {/* ===== CỘT 1: TRONG NƯỚC ===== */}
                        <div>
                          <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Trong nước
                          </p>
                          <ul className="mt-2 space-y-2 text-sm">
                            {selectedItem.content.background.domestic.map((p, i) => (
                              <li key={i}>• {p}</li>
                            ))}
                          </ul>
                        </div>

                        {/* ===== DIVIDER (NGĂN CÁCH) ===== */}
                        <div className="hidden md:block">
                          <div className="h-full w-px bg-gray-300 dark:bg-gray-700 mx-2" aria-hidden="true" />
                        </div>

                        {/* ===== CỘT 2: QUỐC TẾ ===== */}
                        <div>
                          <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Quốc tế
                          </p>
                          <ul className="mt-2 space-y-2 text-sm">
                            {selectedItem.content.background.international.map((p, i) => (
                              <li key={i}>• {p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Chuyển đổi chính sách */}
                    <div>
                      <h2 className="mb-4 text-base font-bold">Chuyển đổi chính sách</h2>
                      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
                        {/* Chính sách cũ */}
                        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                          <h3 className="mb-2 font-semibold text-destructive">Chính sách cũ</h3>
                          <ul className="space-y-1 text-sm">
                            {selectedItem.content.oldPolicies.map((p, i) => (
                              <li key={i} className="flex gap-2">
                                {/* Giả sử XCircle là component icon */}
                                <XCircle className="mt-0.5 h-3.5 w-3.5 text-destructive" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex items-center justify-center">
                          {/* Giả sử ArrowRight là component icon */}
                          <ArrowRight className="h-8 w-8 text-muted-foreground" />
                        </div>

                        {/* Chính sách mới */}
                        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                          <h3 className="mb-2 font-semibold text-emerald-600">Chính sách mới</h3>
                          <ul className="space-y-1 text-sm">
                            {selectedItem.content.newPolicies.map((p, i) => (
                              <li key={i} className="flex gap-2">
                                {/* Giả sử CheckCircle là component icon */}
                                <CheckCircle className="mt-0.5 h-3.5 w-3.5 text-emerald-500" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Mục tiêu & Nhiệm vụ */}
                    {selectedItem.content.targetsAndMissions && selectedItem.content.targetsAndMissions.length > 0 && (
                      <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
                        <h3 className="mb-2 font-bold text-blue-600">Mục tiêu & Nhiệm vụ</h3>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          {selectedItem.content.targetsAndMissions.map((mission, i) => (
                            <li key={i}>{mission}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Sự kiện */}
                    <div>
                      <h3 className="mb-2 font-bold">Sự kiện nổi bật</h3>
                      <ul className="rounded-lg bg-muted p-3 text-sm list-disc pl-5">
                        {selectedItem.content.events.map((event, index) => (
                          <li key={index} className="mb-1">
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  // --- NỘI DUNG CHI TIẾT (contentNext) - Logic phân nhánh cho ĐH VIII và ĐH IX ---
                  selectedItem.contentNext && (
                    <div className="space-y-6">

                      {/* TIÊU ĐỀ CHUNG */}
                      {selectedItem.contentNext.majorLessons ? (
                        <h3 className="text-xl font-bold text-primary border-b pb-2">Nghị quyết và Chủ trương sau Đại hội</h3>
                      ) : (
                        <h3 className="text-xl font-bold text-amber-600 border-b pb-2">Nghị quyết và Chủ trương sau Đại hội IX</h3>
                      )}


                      {/* 1. Nền tảng Tư tưởng & Mô hình Kinh tế (Chỉ có trong ĐH IX) */}
                      {selectedItem.contentNext.ideologicalFoundation && (
                        <div className="rounded-xl border border-indigo-500/30 bg-indigo-50/50 p-4 space-y-4">
                          <h4 className="font-bold text-indigo-700">Nền tảng Tư tưởng & Mô hình Kinh tế</h4>

                          {/* Tư tưởng Hồ Chí Minh */}
                          {selectedItem.contentNext.ideologicalFoundation.hoChiMinhThought && (
                            <div className="space-y-1">
                              <p className="font-semibold text-sm">Tư tưởng Hồ Chí Minh:</p>
                              <ul className="space-y-1 text-sm list-disc pl-5">
                                {selectedItem.contentNext.ideologicalFoundation.hoChiMinhThought.map((item, i) => (
                                  <li key={`hcm-${i}`}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Mô hình kinh tế */}
                          {selectedItem.contentNext.ideologicalFoundation.economicModel && (
                            <div className="space-y-1">
                              <p className="font-semibold text-sm">Mô hình Kinh tế:</p>
                              <ul className="space-y-1 text-sm list-disc pl-5">
                                {selectedItem.contentNext.ideologicalFoundation.economicModel.map((item, i) => (
                                  <li key={`econ-${i}`}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {selectedItem.contentNext.economicOrientation && (
                        <div className="rounded-xl border border-blue-500/30 bg-blue-50/50 p-4 space-y-2">
                          <h4 className="font-bold text-blue-700">Định hướng phát triển toàn diện</h4>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {selectedItem.contentNext.economicOrientation.content.map((item, i) => (
                              <li key={`econ-ori-${i}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* 4. Chiến lược Bảo vệ Tổ quốc (Chỉ có trong ĐH IX) */}
                      {selectedItem.contentNext.nationalDefenseStrategy && (
                        <div className="rounded-xl border border-red-500/30 bg-red-50/50 p-4 space-y-4">
                          <h4 className="font-bold text-red-700">Chiến lược Bảo vệ Tổ quốc</h4>

                          <div className="space-y-1">
                            <p className="font-semibold text-sm">Mục tiêu:</p>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.nationalDefenseStrategy.aims.map((item, i) => (
                                <li key={`aim-${i}`}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-1">
                            <p className="font-semibold text-sm">Nhiệm vụ cơ bản:</p>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.nationalDefenseStrategy.basicTasks.map((item, i) => (
                                <li key={`task-${i}`}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* 5. Chỉ đạo của Trung ương sau Đại hội (ĐH IX) */}
                      {selectedItem.contentNext.postCongressResolutions?.economyAndLand && (
                        <div className="rounded-xl border p-4 bg-muted/50 space-y-4">
                          <h4 className="font-bold text-gray-800">Chỉ đạo của Trung ương Khóa IX</h4>

                          {/* Kinh tế và Đất đai */}
                          <div className="space-y-1">
                            <p className="font-semibold text-sm">Đổi mới Kinh tế & Quản lý Đất đai:</p>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.postCongressResolutions.economyAndLand.map((item, i) => (
                                <li key={`eco-res-${i}`}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Xây dựng Đảng */}
                          {selectedItem.contentNext.postCongressResolutions.partyBuilding && (
                            <div className="space-y-1">
                              <p className="font-semibold text-sm">Xây dựng Đảng, Tư tưởng & Đạo đức:</p>
                              <ul className="space-y-1 text-sm list-disc pl-5">
                                {selectedItem.contentNext.postCongressResolutions.partyBuilding.map((item, i) => (
                                  <li key={`party-res-${i}`}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                        </div>
                      )}

                      {/* ==================================================================== */}
                      {/* LOGIC DÀNH CHO ĐẠI HỘI VIII                    */}
                      {/* ==================================================================== */}

                      {/* Các bài học lớn (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.majorLessons && (
                        <div className="rounded-xl border p-4 bg-yellow-50/50">
                          <h4 className="mb-2 font-bold text-yellow-700">6 Bài học kinh nghiệm lớn (10 năm Đổi mới)</h4>
                          <ul className="space-y-1 text-sm list-decimal pl-5">
                            {selectedItem.contentNext.majorLessons.map((lesson, i) => (
                              <li key={i}>{lesson}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Quan điểm về Công nghiệp hóa, Hiện đại hóa (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.postCongressResolutions?.industrializationViews && (
                        <div className="rounded-xl border p-4">
                          <h4 className="mb-2 font-bold text-cyan-600">Quan điểm về CNH, HĐH</h4>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {selectedItem.contentNext.postCongressResolutions.industrializationViews.map((view, i) => (
                              <li key={i}>{view}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Xây dựng Nhà nước và Hệ thống chính trị (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.postCongressResolutions?.stateAndSystemBuilding && (
                        <div className="rounded-xl border p-4 bg-blue-50/50">
                          <h4 className="mb-2 font-bold text-blue-600">Xây dựng Nhà nước & Hệ thống Chính trị (NQ 03/1997)</h4>
                          <p className="text-xs text-muted-foreground mb-2">Hội nghị Trung ương 3 khóa VIII</p>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {selectedItem.contentNext.postCongressResolutions.stateAndSystemBuilding.focus.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Xây dựng Đảng (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.postCongressResolutions?.partyBuilding && !selectedItem.contentNext.ideologicalFoundation && (
                        <div className="rounded-xl border p-4 bg-red-50/50">
                          <h4 className="mb-2 font-bold text-red-600">Xây dựng Đảng & Chống Suy thoái (NQ 10/1999)</h4>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {selectedItem.contentNext.postCongressResolutions.partyBuilding.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Văn hóa, Giáo dục & KHCN (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.postCongressResolutions?.socialAndCulturalDevelopment?.educationAndScience && (
                        <div className="space-y-4">
                          {/* Giáo dục/KHCN */}
                          <div className="rounded-xl border p-4 bg-emerald-50/50">
                            <h4 className="mb-2 font-bold text-emerald-600">Giáo dục & Khoa học – Công nghệ (NQ 02/1996)</h4>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.postCongressResolutions.socialAndCulturalDevelopment.educationAndScience.focus.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                          {/* Văn hóa */}
                          <div className="rounded-xl border p-4 bg-pink-50/50">
                            <h4 className="mb-2 font-bold text-pink-600">Văn hóa (NQ TW5/1998)</h4>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.postCongressResolutions.socialAndCulturalDevelopment.culture.focus.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {isImageZoomed && selectedItem && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsImageZoomed(false)}
        >
          <button
            className="absolute right-4 top-4 text-white hover:text-gray-300 text-3xl font-bold z-10"
            onClick={() => setIsImageZoomed(false)}
          >
            ✕
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedItem.content.image || "/fallback-image.png"}
              alt={selectedItem.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-lg backdrop-blur-sm">
            Click bất kỳ đâu để đóng
          </div>
        </div>
      )}

      {/* End Label */}
      <div className="mt-8 flex justify-center">
        <div className="rounded-lg border-2 border-emerald-500 bg-background px-6 py-2 font-bold text-emerald-600 shadow-md">
          HIỆN TẠI
        </div>
      </div>
    </div>
  )
}