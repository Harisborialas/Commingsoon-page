const Toogle = () => {
  return (
    <>
      <div class="toggle-button">
        <input type="checkbox" id="toggle" class="toggle-input" />
        <label for="toggle" class="toggle-label">
          <span class="toggle-text-on">AI Startup/Developer</span>
          <span class="toggle-text-off">A Very Smart End User</span>
        </label>
      </div>
    </>
  );
};
export default Toogle;
