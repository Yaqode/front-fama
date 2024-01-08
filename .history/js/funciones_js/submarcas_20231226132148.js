const input = document.getElementById('fileInput');
        const imageContainer = document.getElementById('imageContainer');

        input.addEventListener('change', function () {
            const file = input.files[0];
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = function () {
                const base64String = reader.result;
                console.log(base64String);
            };
        });
