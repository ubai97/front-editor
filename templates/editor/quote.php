<?php
    if ($data['alignment'] == 'center') {
        $centerClass = 'bfe-quote--center';
    } else {
        $centerClass = '';
    }
?>

<blockquote class="bfe-quote <?= $centerClass ?>">
    <?= $data['text'] ?>
</blockquote>