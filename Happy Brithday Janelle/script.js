<script>
  const text = "Time really flies, right? From 2022 until now, we've grown so much together.";
  const typingElement = document.getElementById("typing-text");

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 40); // change speed here
    }
  }

  typeEffect();
</script>
</body>
</html>