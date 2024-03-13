import FrameComponent from "../components/FrameComponent";
function FrameDesign(){
    return (
        <div className="w-full h-[597px] relative bg-gray-600 overflow-hidden flex flex-row items-start justify-start tracking-[normal] mq1050:h-auto mq1050:min-h-[597]">
            <section className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-col items-start justify-start pt-[17px] pb-0 pr-[39px] pl-0 box-border gap-[39px_0px] bg-[url('/public/root@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[27px] text-gray-500 font-inter mq725:gap-[19px_0px]">
                <img
                    className="w-[1345px] h-[597px] relative object-cover hidden max-w-full z-[0]"
                    alt=""
                    src="/image@2x.png"
                />
                <img
                    className="w-[calc(100%_-_1px)] h-[calc(100%_-_1px)] absolute !m-[0] top-[0px] right-[0px] bottom-[1px] left-[1px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                    alt=""
                    src="/image@2x.png"
                />
                <div className="w-[456px] flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
                    <h2 className="m-0 h-[26px] flex-1 relative text-inherit font-normal font-inherit flex items-center max-w-full z-[2] mq450:text-[22px]">
                        ACHETEZ PAR CATEGORIES
                    </h2>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[2px_0px] max-w-full text-base text-gray-100">
                    <div className="w-[1286px] flex flex-row flex-wrap items-start justify-start py-0 pr-0 pl-5 box-border max-w-full [row-gap:20px]">
                        <div className="w-[316px] flex flex-col items-start justify-start gap-[2px_0px]">
                            <img
                                className="self-stretch h-[281px] relative max-w-full overflow-hidden shrink-0 object-cover z-[4]"
                                loading="lazy"
                                alt=""
                                src="/image-1@2x.png"
                            />
                            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                                <div className="w-[147px] relative flex items-center shrink-0 z-[2]">{`FORCE&HALTERO`}</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[617px] max-w-full text-gray-200 mq725:min-w-full">
                            <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1000:flex-wrap">
                                <div className="flex-1 flex flex-row items-start justify-start pt-px px-0 pb-1 box-border bg-[url('/public/frame-1@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[411px] max-w-full [row-gap:20px] z-[2] mq725:flex-wrap mq725:min-w-full">
                                    <img
                                        className="h-[285px] w-[633px] relative object-cover hidden max-w-full"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                    <img
                                        className="h-[280px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[207px] min-h-[280px] z-[3]"
                                        loading="lazy"
                                        alt=""
                                        src="/image-2@2x.png"
                                    />
                                    <img
                                        className="h-[280px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[204px] min-h-[280px] z-[3]"
                                        alt=""
                                        src="/image-3@2x.png"
                                    />
                                </div>
                                <img
                                    className="h-[281px] w-80 relative object-cover z-[4] ml-[-3px] mq725:ml-0 mq1000:flex-1"
                                    loading="lazy"
                                    alt=""
                                    src="/image-4@2x.png"
                                />
                            </div>
                            <div className="w-[905px] flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full mt-[-2px] mq1000:pl-[30px] mq1000:pr-[30px] mq1000:box-border">
                                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq725:flex-wrap">
                                    <div className="relative z-[2]">PREPARATIONPHYSIQUE</div>
                                    <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[39px] pl-0 text-[15px] text-gray-400">
                                        <div className="relative z-[2]">GYMNASTIQUE</div>
                                    </div>
                                    <div className="w-[111px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-gray-300">
                                        <div className="self-stretch relative z-[2]">{`RIGS&RACKS`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FrameComponent />
                </div>
            </section>
        </div>
    )
}
export default FrameDesign
