const AdminFooter = (props) => {
    const {
        background = {},
        title = {}
    } = (props) || {}

    const getBackgroundStyle = () => {
        const bg = background || {};

        if (bg.type === "gradient") {
        return {
            background: `linear-gradient(${bg.gradientDirection || "to bottom right"}, ${bg.gradientFrom || "#667eea"}, ${bg.gradientTo || "#764ba2"})`,
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
        return { backgroundColor: bg.color || "#1b5078" };
    };
    const sizeH = {
        1: "text-5xl",
        2: "text-4xl",
        3: "text-3xl",
        4: "text-2xl",
        5: "text-xl",
        6: "text-lg",
    };

    return (
        <div 
        className="w-full pb-3 h-auto"
        style={getBackgroundStyle()}
        >
            <div className="pt-6 text-center">
                <p 
                className={`${sizeH[title?.level]}`}
                style={{color: title?.color}}
                >
                    {title?.content}
                </p>
            </div>
        </div>
    )
}
export default AdminFooter