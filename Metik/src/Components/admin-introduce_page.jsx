const AdminIntroducePage = (props) => {
  const { background = {}, paragraph = [], videoUrl } = props || {};

  const getBackgroundStyle = () => {
    const bg = background || {};

    if (bg.type === "gradient") {
      return {
        background: `linear-gradient(${bg.gradientDirection || "to bottom right"}, ${
          bg.gradientFrom || "#667eea"
        }, ${bg.gradientTo || "#764ba2"})`,
      };
    }

    if (bg.type === "image" && bg.imageUrl) {
      return {
        backgroundImage: `url('${bg.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    if (bg.type === "gif" && bg.gif) {
      return {
        backgroundImage: `url('${bg.gif}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    return { backgroundColor: bg.color || "#ffffff" };
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 h-auto my-20" style={getBackgroundStyle()}>
      <div className="flex flex-col justify-center w-[80%]">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {videoUrl && (
            <div className="shrink-0 w-full md:w-125">
              <video
                src={videoUrl}
                controls
                className="w-full shadow-lg"
                style={{ maxHeight: "400px" }}
              >
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </div>
          )}

          <div className="flex-1 space-y-6 w-full">
            {Array.isArray(paragraph) &&
              paragraph.map((item, idx) => (
                <div key={idx} className="w-auto ">
                  <p className="text-justify leading-relaxed text-xl" style={{ color: item?.color || "#4a4a4ad9" }}>
                    {item?.content}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIntroducePage;
