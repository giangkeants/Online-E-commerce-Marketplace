document
    .querySelector("#comment-pagination")
    .addEventListener("click", (event) => {
        const id = document.getElementById("product_id").value;
        $.ajax({
            url: `http://localhost:8080/api/products/${id}/comments?page=${event.target.innerText}`,
            type: "GET",
            dateType: "JSON",
            success: function (data) {
                const $comment = $("#comment-list");
                $comment.empty();

                const {comments, prev, next, curr} = data;
                const prevItem = document.getElementById("prev-page-item");
                prevItem.innerText = prev;
                prevItem.value = prev;

                const nextItem = document.getElementById("next-page-item");
                nextItem.innerText = next;
                nextItem.value = next;

                const currItem = document.getElementById("curr-page-item");
                currItem.innerText = curr;
                currItem.value = curr;

                comments.forEach((comment) => {
                    const str = `<div class="review_item">
                                    <div class="media">
                                        {{#if ${comment.user_avatar_url}}}
                                        <img style="object-fit: cover; width: 75px; height: 75px; border-radius: 50%"
                                            class="avatar" src="${comment.user_avatar_url}" alt="">
                                        {{else}}
                                        <img style="object-fit: cover; width: 75px; height: 75px; border-radius: 50%; float: left"
                                            class="avatar"
                                            src="https://cdn.discordapp.com/attachments/635399217963204615/931385624555049070/unknown.png"
                                            alt="">
                                        {{/if}}
                                        <div class="media-body">
                                            <h4 style="margin-bottom:5px; padding-top:15px; margin-left:10px">${comment.user_name} <i style="font-size:12px; font-weight:lighter">(${comment.createdAt})</i></h4>
                                            <p style="margin-left: 10px">${comment.content}</p>
                                        </div>
                                    </div>  
                                </div>`;

                    // `<div class="review_item">
                    //     <div class="media">
                    //         <div class="d-flex">
                    //             <img class="avatar" src="${comment.user_avatar_url}" alt="/img/male_avatar.svg"/>
                    //         </div>
                    //         <div class="media-body">
                    //             <h4>${comment.user_name}</h4>
                    //             <h5>${comment.createdAt}</h5>
                    //         </div>
                    //     </div>
                    //     <p>${comment.content}</p>
                    // </div>`;

                    const html = $.parseHTML(str);
                    $comment.append(html);
                });
            },
        });
    });
