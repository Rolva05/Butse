export default function ProfilePreview({
  formData
}) {

  const initials =
    formData.fullName

      ? formData.fullName
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((part) => part[0])
          .join("")
          .toUpperCase()

      : "RC";


  return (

    <aside className="preview-card slide-in">

      <div className="preview-heading">

        <span className="eyebrow">
          LIVE PREVIEW
        </span>

        <span className="status-dot">
          Updating
        </span>

      </div>


      <div className="avatar large">
        {initials}
      </div>


      <h2>
        {formData.fullName ||
          "Your Name"}
      </h2>


      <p className="muted">

        {formData.campus ||
          "Campus not selected"}

      </p>


      <p className="bio-preview">

        {formData.bio ||
          "Your short bio will appear here as you type."}

      </p>


      <div className="tag-list">

        {formData.interests.length > 0
          ? formData.interests.map(
              (interest) => (

                <span
                  className="tag"
                  key={interest}
                >
                  {interest}
                </span>

              )
            )

          : (

            <span className="muted">
              Select your interests
            </span>

          )}

      </div>

    </aside>

  );

}