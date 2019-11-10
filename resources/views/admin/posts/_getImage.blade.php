<div class="modal" tabindex="-1" role="dialog" id="getImageModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Pixabay Images</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img src="" id="pixbayImg" class="img-thumbnail">
                {!! Html::image('loading.gif','',array('id' => 'loading', 'class' => 'img-thumbnail')) !!}
            </div>
            <div class="modal-footer">
                <button id="previousImageButton" type="button" class="btn btn-secondary">Previous Image</button>
                <button id="nextImageButton" type="button" class="btn btn-primary">Next Image</button>
                <button id="addImageButton" type="button" class="btn btn-success" data-dismiss="modal">Add Image</button>
            </div>
        </div>
    </div>
</div>
