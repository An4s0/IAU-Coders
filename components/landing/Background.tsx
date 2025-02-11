'use client';

export default function Background() {
    return (
        <div className="inset-0 pointer-events-none">
            <div className="absolute inset-0">
                {/* <div className="absolute top-[20%] left-[25%] h-[350px] w-[350px] bg-[#00ffc4]/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] right-[25%] h-[350px] w-[350px] bg-[#00ffc4]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[15%] left-[35%] h-[350px] w-[350px] bg-[#00ffc4]/20 rounded-full blur-[120px]" /> */}
            </div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            <div className="tech-grid" />
        </div>
    );
}