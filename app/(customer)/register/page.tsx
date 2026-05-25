"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1); // 1: Form Đăng ký, 2: Chọn Fandom
  
  // Form States
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  // Fandom States
  const [selectedFandoms, setSelectedFandoms] = useState<string[]>([]);
  const fandomList = [
    { id: 'bts', name: 'BTS', color: 'bg-purple-900/40 border-purple-500' },
    { id: 'bp', name: 'BLACKPINK', color: 'bg-pink-900/40 border-pink-500' },
    { id: 'nj', name: 'NewJeans', color: 'bg-blue-900/40 border-blue-500' },
    { id: 'svt', name: 'SEVENTEEN', color: 'bg-rose-900/40 border-rose-500' },
    { id: 'aespa', name: 'aespa', color: 'bg-indigo-900/40 border-indigo-500' },
    { id: 'ive', name: 'IVE', color: 'bg-red-900/40 border-red-500' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast.error("Vui lòng đồng ý với Điều khoản dịch vụ để tiếp tục.");
      return;
    }
    // Giả lập API call thành công
    toast.success("Đăng ký thành công! Hãy chọn Fandom của bạn.", { icon: '🎉' });
    setStep(2); // Chuyển sang màn hình Onboarding
  };

  const toggleFandom = (fandomName: string) => {
    if (selectedFandoms.includes(fandomName)) {
      setSelectedFandoms(selectedFandoms.filter(f => f !== fandomName));
    } else {
      if (selectedFandoms.length >= 3) {
        toast.error("Bạn chỉ được chọn tối đa 3 nhóm.");
        return;
      }
      setSelectedFandoms([...selectedFandoms, fandomName]);
    }
  };

  const handleFinish = () => {
    toast.success("Thiết lập hoàn tất! Đang chuyển hướng...");
    router.push('/');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#131520] p-8 rounded-2xl border border-gray-800 shadow-2xl">
        
        {/* BƯỚC 1: FORM ĐĂNG KÝ */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-black text-white mb-2">Tạo tài khoản k-Bridge</h1>
              <p className="text-purple-400 font-medium text-sm">Nhận ngay thông báo Pre-order Album sớm nhất!</p>
            </div>

            {/* Social Sign-Up */}
            <div className="space-y-3 mb-8">
              <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-3">
                <i className="fa-brands fa-google text-red-500"></i> Tiếp tục với Google
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="w-full bg-black hover:bg-gray-900 border border-gray-700 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2">
                  <i className="fa-brands fa-apple"></i> Apple
                </button>
                <button className="w-full bg-[#FEE500] hover:bg-[#e5ce00] text-black font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2">
                  <i className="fa-solid fa-comment"></i> Kakao / Zalo
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-gray-800 flex-1"></div>
              <span className="text-xs text-gray-500 font-medium uppercase">Hoặc đăng ký thủ công</span>
              <div className="h-px bg-gray-800 flex-1"></div>
            </div>

            {/* Manual Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email (Tên đăng nhập)</label>
                <input autoFocus type="email" required placeholder="vidu@gmail.com" className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-purple-500 focus:outline-none transition" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Họ và tên (Khớp tài khoản ngân hàng)</label>
                <input type="text" required placeholder="TRẦN KHÁNH VI" className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-purple-500 focus:outline-none transition uppercase" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Ngày sinh</label>
                  <input type="date" required className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-purple-500 focus:outline-none transition [color-scheme:dark]" />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-400 mb-1">Mật khẩu</label>
                  <input type={showPassword ? "text" : "password"} required placeholder="Tối thiểu 8 ký tự" pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}" title="Tối thiểu 8 ký tự, bao gồm chữ, số và ký tự đặc biệt" className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-purple-500 focus:outline-none transition pr-10" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[34px] text-gray-500 hover:text-gray-300">
                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 mt-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" required checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="mt-1 accent-purple-600 w-4 h-4 cursor-pointer" />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition leading-relaxed">
                    Tôi xác nhận đã từ đủ 14 tuổi và đồng ý với <Link href="#" className="text-purple-400 hover:underline">Điều khoản dịch vụ</Link> & <Link href="#" className="text-purple-400 hover:underline">Chính sách bảo mật</Link>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 accent-purple-600 w-4 h-4 cursor-pointer" />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition leading-relaxed">
                    (Tùy chọn) Nhận thông báo dự án GOM, lịch Comeback và ưu đãi qua Email/Zalo.
                  </span>
                </label>
              </div>

              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-purple-900/20 mt-4">
                Đăng ký tài khoản
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Đã có tài khoản? <Link href="/login" className="text-white font-bold hover:text-purple-400 transition">Đăng nhập ngay</Link>
            </p>
          </div>
        )}

        {/* BƯỚC 2: FANDOM SELECTOR (ONBOARDING) */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white mb-2">Chọn Fandom của bạn</h2>
              <p className="text-gray-400 text-sm">Chọn từ 1 - 3 nhóm nhạc bạn yêu thích nhất để k-Bridge tối ưu đề xuất GOM Album cho riêng bạn.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {fandomList.map((fandom) => {
                const isSelected = selectedFandoms.includes(fandom.name);
                return (
                  <button
                    key={fandom.id}
                    onClick={() => toggleFandom(fandom.name)}
                    className={`p-4 rounded-xl border text-center font-bold transition-all duration-300 ${
                      isSelected 
                        ? `${fandom.color} text-white shadow-[0_0_15px_rgba(168,85,247,0.2)] scale-95` 
                        : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                    }`}
                  >
                    {fandom.name}
                    {isSelected && <i className="fa-solid fa-circle-check absolute top-2 right-2 text-white"></i>}
                  </button>
                );
              })}
            </div>

            <button 
              onClick={handleFinish}
              disabled={selectedFandoms.length === 0}
              className={`w-full font-bold py-4 rounded-xl transition shadow-lg ${
                selectedFandoms.length > 0 
                  ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/20' 
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              Hoàn tất & Khám phá GOM Plaza
            </button>
            
            {selectedFandoms.length === 0 && (
              <p className="text-center text-xs text-red-400 mt-4">Vui lòng chọn ít nhất 1 nhóm nhạc để tiếp tục.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}