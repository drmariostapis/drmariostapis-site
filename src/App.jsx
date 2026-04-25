export default function App() {
  const logoSrc = "https://static.wixstatic.com/media/ced3ae_07ed9e8302b441ef81d6ab46b50cd2fd~mv2.jpg/v1/fill/w_60,h_79,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.jpg";
  const heroImg = "https://static.wixstatic.com/media/c4832409f40a465eb9c7f110ec972872.jpg/v1/fill/w_980,h_583,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c4832409f40a465eb9c7f110ec972872.jpg";
  const doctorComputerImg = "https://static.wixstatic.com/media/33b6586d586d111202ddaafadd577330.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/33b6586d586d111202ddaafadd577330.jpg";
  const nurseImg = "https://static.wixstatic.com/media/cc33194e92ac493c81a5d60306500ac3.jpg/v1/fill/w_980,h_736,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc33194e92ac493c81a5d60306500ac3.jpg";
  const surgeryImg = "https://static.wixstatic.com/media/ced3ae_0c5af15eb6594fce8d309862918d1da2~mv2.jpg/v1/crop/x_0,y_422,w_2448,h_2421/fill/w_900,h_890,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20220611_112256.jpg";
  const blue = "#5f89a3";
  const inputStyle = "w-full border border-[#333] bg-white px-7 py-7 text-[30px] font-light text-[#222] outline-none placeholder:text-[#222]";
  return (
    <div className="min-h-screen bg-white text-[#222] font-sans">
      <main className="mx-auto max-w-[720px] bg-white">
        <header className="bg-white px-[46px] pt-[88px] pb-[42px]">
          <div className="flex items-start justify-between">
            <div className="pt-1 text-[24px] font-light tracking-wide text-[#222]">drmtapis@yahoo.co.uk</div>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-[#333] px-4 py-2 text-[18px] tracking-wide">GR | EN</div>
              <div className="text-[58px] leading-[0.8] font-light text-[#111]">≡</div>
            </div>
          </div>
          <div className="mt-[24px] border-t border-[#333]" />
          <img src={logoSrc} alt="Dr Marios Tapis icon" className="mt-[24px] h-[91px] w-[65px] object-cover" />
        </header>
        <section className="h-[674px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <section className="px-[24px] pt-[78px] pb-[112px] text-white" style={{ backgroundColor: blue }}>
          <h1 className="text-[56px] font-light leading-[1.1] tracking-[0.02em]">Dr. Marios Tapis MD</h1>
          <div className="mt-[48px] space-y-[22px] text-[38px] font-light leading-[1.18] tracking-[0.01em]">
            <div>Nicosia ENT Centre</div><div>Synesio Medical Centre</div>
          </div>
          <div className="mt-[120px] space-y-[28px] text-[30px] font-normal leading-[1.35]">
            <div>Χειρουργός Ωτορινολαρυγγολόγος</div><div>Νευροωτολόγος</div>
          </div>
          <div className="mt-[130px] pl-[24px] text-[30px] font-light leading-[1.4]">
            Κλείστε ραντεβού <span className="font-bold">22256634, 24641111</span>
          </div>
        </section>
        <section className="px-[24px] pt-[116px] pb-[70px] text-center text-white" style={{ backgroundColor: blue }}>
          <h2 className="text-[54px] font-light leading-none tracking-[0.03em]">Οι Υπηρεσίες μας</h2>
          <p className="mt-[44px] text-[30px] font-light tracking-wide">Ολοκληρωμένη ΩΡΛ φροντίδα</p>
        </section>
        <section className="min-h-[780px] px-[54px] pt-[42px] pb-[54px] text-center text-white bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(40,70,95,0.24), rgba(40,70,95,0.24)), url(${nurseImg})` }}>
          <div className="mx-auto space-y-[20px] text-[28px] font-light leading-[1.55] tracking-[0.01em]">
            <p>Ο Δρ. Μάριος Ταπής προσφέρει</p><p>ολοκληρωμένη εξέταση αυτιών, μύτης</p><p>και λαιμού για παιδιά και ενήλικες</p><p>καθώς και διερεύνηση ιλίγγου, ζάλης,</p><p>εμβοών και προβλημάτων ακοής.</p><p>Παρέχει σύγχρονη ιατρική και</p><p>χειρουργική αντιμετώπιση, με έμφαση</p><p>στην ενδοσκοπική χειρουργική ρινός</p><p>και ωτός, καθώς και στη λειτουργική</p><p>και αισθητική χειρουργική ρινός.</p>
          </div>
        </section>
        <section className="px-[46px] pt-[24px] pb-[52px]" style={{ backgroundColor: blue }}>
          <img src={surgeryImg} alt="Operating room" className="h-auto w-full object-cover" />
        </section>
        <section className="px-[46px] pt-[40px] pb-[70px] text-white" style={{ backgroundColor: blue }}>
          <h2 className="text-[40px] font-light leading-none tracking-[0.02em]">Χειρουργική δραστηριότητα</h2>
          <div className="mt-[44px] space-y-[22px] text-[28px] font-light leading-[1.45]">
            <p>Ο ιατρός πραγματοποιεί χειρουργικές επεμβάσεις σε συνεργαζόμενες ιδιωτικές κλινικές στην Κύπρο.</p>
            <p>Οι επεμβάσεις αφορούν παιδιά και ενήλικες και προγραμματίζονται μετά από κλινική εξέταση και πλήρη ενημέρωση του ασθενούς.</p>
          </div>
        </section>
        <section className="px-[46px] pt-[30px] pb-[110px] text-white" style={{ backgroundColor: blue }}>
          <h2 className="text-[40px] font-light leading-none tracking-[0.02em]">Ωράριο λειτουργίας</h2>
          <div className="mt-[48px] text-[32px] font-light">Κατόπιν ραντεβού</div>
          <div className="mt-[116px] space-y-[18px] text-[30px] font-normal leading-[1.45]">
            <div>Δευτέρα-Τετάρτη 09.00-13.00</div><div className="pl-[282px]">16.00-19.30</div>
            <div className="flex justify-between gap-6"><span>Πέμπτη, Παρασκευή</span><span>09.00-16.00</span></div>
            <div>Μόνο με ραντεβού</div><div>Συμβεβλημένος με ΓΕΣΥ</div>
          </div>
        </section>
        <section className="h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${doctorComputerImg})` }} />
        <section className="bg-white px-[23px] pt-[116px] pb-[120px]">
          <h2 className="text-center text-[52px] font-light tracking-[0.04em] text-[#222]">Επικοινωνία</h2>
          <form className="mt-[56px] space-y-[28px]">
            <input className={inputStyle} placeholder="Όνομα" /><input className={inputStyle} placeholder="Email" />
            <input className={inputStyle} placeholder="Θέμα" />
            <textarea className={`${inputStyle} min-h-[280px] resize-none`} placeholder="Γράψτε το μήνυμά σας εδώ..." />
            <div className="flex justify-end pt-[10px]"><button type="button" className="bg-[#171717] px-[106px] py-[34px] text-[30px] font-light text-white">Αποστολή</button></div>
          </form>
        </section>
      </main>
    </div>
  );
}
