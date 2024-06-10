<template>
    <VModal title="Confirm?" cancelLabel="No" :open="props.visible" size="medium" actions="center" noscroll noclose
        @close="$emit('update:visible', false)">
        <template #content>
            <div class="modalbox error center animate">
                <div class="icon">
                    <i class="fas fa-question"></i>
                    <span class="glyphicon glyphicon-thumbs-down"></span>
                </div>
                <h1 class="errorExpFontSize">Are you sure? You want to delete this Mamla?</h1>
            </div>
        </template>
        <template #action>

            <VButton color="primary" raised @click="emit('on-confirm-delete')">
                Yes
            </VButton>
        </template>
    </VModal>
</template>
<script setup>

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(['update:visible', 'on-confirm']);
</script>


<style lang="scss" scoped>
.d-flex {
    width: 75% !important;
    margin-top: 20px !important;
}

.width {
    margin: 0 10px !important;
}

.fa-question {
    color: #fff;
    font-size: large;
}

.errorExpFontSize {
    /*font-size: 1vw;*/
    ;
    color: #f44336 !important;
}

.fontSizeEModal {
    font-size: 20px !important;
}

.modalbox.success,
.modalbox.error {
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    padding: 25px 25px 15px;
    text-align: center;
}

.modalbox.success.animate .icon,
.modalbox.error.animate .icon {
    -webkit-animation: fall-in 0.75s;
    -moz-animation: fall-in 0.75s;
    -o-animation: fall-in 0.75s;
    animation: fall-in 0.75s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.modalbox.success button,
.modalbox.error button,
.modalbox.success button:active,
.modalbox.error button:active,
.modalbox.success button:focus,
.modalbox.error button:focus {
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    margin-top: 15px;
    width: 70% !important;
    background: transparent;
    color: #000;
    border-color: #4caf50;
    outline: none;
    padding: 0 10px !important;
}

.modalbox.success button:hover,
.modalbox.error button:hover,
.modalbox.success button:active:hover,
.modalbox.error button:active:hover,
.modalbox.success button:focus:hover,
.modalbox.error button:focus:hover {
    color: #fff;
    background: #4caf50;
    border-color: transparent;
}

.modalbox.success .icon,
.modalbox.error .icon {
    position: relative;
    margin: 20px auto;
    margin-top: -75px;
    background: #4caf50;
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.modalbox.success .icon span,
.modalbox.error .icon span {
    position: absolute;
    font-size: 4em;
    color: #fff;
    text-align: center;
    padding-top: 20px;
}

.modalbox.error button,
.modalbox.error button:active,
.modalbox.error button:focus {
    color: #f44336;
    border-color: #f44336;
}

.modalbox.error button:hover,
.modalbox.error button:active:hover,
.modalbox.error button:focus:hover {
    color: #fff;
    background: #f44336;
}

.modalbox.error .icon {
    background: #f44336;
    ;
}

.modalbox.error .icon span {
    padding-top: 25px;
}

.center {
    float: none;
    margin-left: auto;
    margin-right: auto;
    /* stupid browser compat. smh */
}

.center .change {
    clearn: both;
    display: block;
    font-size: 10px;
    color: #ccc;
    margin-top: 10px;
}

@-webkit-keyframes fall-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-moz-keyframes fall-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-o-keyframes fall-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-webkit-keyframes plunge {
    0% {
        margin-top: -100%;
    }

    100% {
        margin-top: 25%;
    }
}

@-moz-keyframes plunge {
    0% {
        margin-top: -100%;
    }

    100% {
        margin-top: 25%;
    }
}

@-o-keyframes plunge {
    0% {
        margin-top: -100%;
    }

    100% {
        margin-top: 25%;
    }
}

@-moz-keyframes fall-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-webkit-keyframes fall-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-o-keyframes fall-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@keyframes fall-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-moz-keyframes plunge {
    0% {
        margin-top: -100%;
    }

    100% {
        margin-top: 15%;
    }
}

@-webkit-keyframes plunge {
    0% {
        margin-top: -100%;
    }

    100% {
        margin-top: 15%;
    }
}

@-o-keyframes plunge {
    0% {
        margin-top: -100%;
    }

    100% {
        margin-top: 15%;
    }
}

@keyframes plunge {
    0% {
        margin-top: -100%;
    }

    100% {
        margin-top: 15%;
    }
}
</style>