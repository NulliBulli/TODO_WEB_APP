export function Impressum() {
  return (
    <div className="Impressum">

      <div
        className="impressumWrapper"
        style={{backgroundColor: "#e8f3ff", display: "grid", placeItems: "center" }}
      >
        <div
          className="d-flex gap-3 flex-column align-items-center"
          style={{
            height: "100vh",
            maxWidth: "800px",
          }}
        >
          <div class="d-flex rounded bg-info m-5">
            <h1 class="m-3">Impressum</h1>
          </div>
          <div class="d-flex rounded bg-info m-2">
            <h2 class="m-2">Autoren: Noel Jungnickel, ...</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
