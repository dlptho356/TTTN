const AdminMap = (props) => {
  const { embedUrl, location = "Lô C3-1, Đường D2-N7, Khu Công nghiệp Tân Phú Trung, Củ Chi, TP HCM", zoom = 15 } = props || {};

  const isEmbedUrl = (value) => typeof value === "string" && /\/embed\/|output=embed/.test(value);

  const iframeSrc = isEmbedUrl(embedUrl)
    ? embedUrl
    : `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        title="location-map"
        src={iframeSrc}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default AdminMap;
