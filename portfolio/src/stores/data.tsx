export type SkillImpl = {
    skillname: string|string[]
    level: keyof Level
    period: keyof Period
    workExperience: boolean
    icon?: string
    svg?: JSX.Element
    frameworkIveUsed?: SkillImpl[]
}

type Level = {[P in 0 | 1 | 2 | 3 | 4 | 5 | 6]: string}
type Period = Level

export const levels: any = {
    0: '使用経験なし',
    1: '一度触ったことがある / 授業で触ったことがある /日常的に使用できるわけではない',
    2: 'リファレンスがあれば任意の処理を実装できる(完全に理解した)',
    3: 'リファレンスがなくても任意の処理が実装できる',
    4: '日常で問題なく利用できる。または、使用だけでなくライブラリやフレームワークを作ることもできる。(ナニモワカラナイ)',
    5: 'マスターレベル。拡張ライブラリを記述できるだけでなく言語の内部使用、処理系、実装等についても熟知している(ﾁｮｯﾄﾃﾞｷﾙ)',
    6: '神'
}

export const periods: any = {
    0: '使用経験なし',
    1: '半年未満',
    2: '半年〜1年',
    3: '1年〜3年',
    4: '3〜5年',
    5: '5年以上',
    6: '前世から使ってた'
}

// export const levels: Level = {
//     0: '使用経験なし',
//     1: '一度触ったことがある / 授業で触ったことがある /日常的に使用できるわけではない',
//     2: 'リファレンスがあれば任意の処理を実装できる(完全に理解した)',
//     3: 'リファレンスがなくても任意の処理が実装できる',
//     4: '日常で問題なく利用できる。使用だけでなくライブラリやフレームワークを作ることもできる。(ナニモワカラナイ)',
//     5: 'マスターレベル。拡張ライブラリを記述できるだけでなく言語の内部使用、処理系、実装等についても熟知している(ﾁｮｯﾄﾃﾞｷﾙ)',
//     6: '神'
// }

// export const periods: Period = {
//     0: '使用経験なし',
//     1: '半年未満',
//     2: '半年〜1年',
//     3: '1年〜3年',
//     4: '3〜5年',
//     5: '5年以上',
//     6: '前世から使ってた'
// }


// Todo: 各技術について詳細エピソードを書けるとなお良いかもしれない。

/**
 * スキル統括
 */
export const skills: SkillImpl[] = [
    {
        skillname: 'C',
        level: 2,
        period: 2,
        svg: (
            <svg viewBox="0 0 128 128">
                <g>
                    <path fill="#659AD3" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
                    <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
                    <path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z" />
                </g>
            </svg>
        ),
        workExperience: false,
    },
    {
        skillname: 'Java',
        level: 4,
        period: 5,
        svg: (
            <svg viewBox="0 0 128 128">
                <path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zM50.522 58.402s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z" /><path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z" /><path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zM54.162 48.647s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z" /><path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z" /><path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z" /><path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zM53.211 115.037c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zM70.694 119.585h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zM89.982 115.037c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zM37.322 122.931c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701v-22.482h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z" />
            </svg>
        ),
        workExperience: false
    },
    {
        skillname: ['HTML', 'XHTML', 'HTML5'],
        level: 4,
        period: 5,
        svg: (
            <svg viewBox="0 0 128 128">
                <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z" /><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076h-36.125z" /><path fill="#EBEBEB" d="M64 66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72 30.489h24.759zM64 95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664 6.292.051-.015z" /><path d="M28.034 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.816 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.855 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.591 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z" /><path fill="#fff" d="M63.962 66.978v11.063h13.624l-1.284 14.349-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zM63.962 44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z" />
            </svg>
        ),
        workExperience: false
    },
    {
        skillname: ['CSS', 'CSS3'],
        level: 4,
        period: 5,
        svg: (
            <svg viewBox="0 0 128 128">
                <path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z" /><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z" /><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z" /><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z" /><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z" /><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z" /><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z" />
            </svg>
        ),
        workExperience: false
    },
    {
        skillname: ['Sass', 'Scss'],
        level: 3,
        period: 3,
        svg: (
            <svg viewBox="0 0 128 128">
                <path fillRule="evenodd" clipRule="evenodd" fill="#CB6699" d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153-.099-.344-.224-.681-.354-1.014-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896 1.114-.879 2.019-1.965 2.691-3.199 1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888-.247.403-.411.894-.48 1.364-.133.898.422 1.764 1.383 1.971.878.189 1.813.259 2.708.193 3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605-.151.153-.242.459-.205.67.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788-3.338-.136-6.619.36-9.765 1.503-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5-.248-.117-.518-.219-.786-.258-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368-1.815-.269-3.603-.128-5.354.438-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436.469-2.378 1.009-4.743 1.578-7.099.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568-.203.259-.471.495-.757.654-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091-3.165 1.107-6.421 1.802-9.765 2.083-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125-3.862-2.025-8.03-3.204-12.332-3.204h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79-.417 1.206-.813 2.499-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zm25.158-19.379c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417-.072.124-.179.231-.283.334-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054.49-.305 1.04-.55 1.595-.706.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354-.008-.239.027-.489.093-.721.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z" />
            </svg>
        ),
        workExperience: false
    },
    {
        skillname: 'JavaScript',
        level: 4,
        period: 5,
        svg: (
            <svg viewBox="0 0 128 128">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z" /><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
            </svg>
        ),
        workExperience: true,
        frameworkIveUsed: [
            {
                skillname: 'jQuery',
                level: 3,
                period: 0,
                workExperience: true
            },
            {
                skillname: 'React',
                level: 3,
                period: 1,
                workExperience: false
            },
            {
                skillname: 'Vue',
                level: 2,
                period: 1,
                workExperience: false
            },
        ]
    },
    {
        skillname: 'TypeScript',
        level: 3,
        period: 3,
        svg: (
            <svg viewBox="0 0 128 128">
                <g id="original">
                    <rect fill="#fff" x="22.67" y="47" width="99.67" height="73.67" /><path id="original-2" data-name="original" fill="#007acc" d="M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z" /></g>
            </svg>
        ),
        workExperience: true,
        frameworkIveUsed: [
            {
                skillname: 'React',
                level: 3,
                period: 2,
                workExperience: true
            },
            {
                skillname: 'Vue',
                level: 2,
                period: 1,
                workExperience: false
            },
            {
                skillname: 'Firebase',
                level: 2,
                period: 2,
                workExperience: true
            },
        ]
    },
    {
        skillname: 'Ruby',
        level: 1,
        period: 1,
        svg: (
            <svg viewBox="0 0 128 128">
    <path d="M30.217 109.422v8.547h-4.724v-22.277h6.491c3.026 0 5.266.551 6.719 1.653 1.453 1.103 2.179 2.776 2.179 5.02 0 1.311-.361 2.477-1.083 3.497-.721 1.021-1.742 1.822-3.063 2.401l6.552 9.705h-5.242l-5.317-8.547h-2.512zm0-3.84h1.524c1.492 0 2.595-.25 3.306-.747.71-.498 1.066-1.28 1.066-2.346 0-1.057-.363-1.808-1.089-2.255-.726-.447-1.851-.671-3.375-.671h-1.432v6.019zM57.795 117.969l-.625-2.179h-.244c-.498.793-1.205 1.404-2.118 1.836-.915.432-1.957.647-3.124.647-2.002 0-3.509-.535-4.526-1.607-1.016-1.072-1.524-2.613-1.524-4.624v-11.108h4.648v9.95c0 1.229.218 2.151.656 2.766.436.615 1.131.921 2.086.921 1.301 0 2.24-.435 2.819-1.302.579-.869.869-2.308.869-4.319v-8.015h4.647v17.035h-3.564zM75.713 100.613c2.011 0 3.586.786 4.725 2.355 1.137 1.569 1.706 3.72 1.706 6.453 0 2.813-.587 4.992-1.759 6.535-1.173 1.545-2.771 2.316-4.793 2.316-2 0-3.57-.727-4.708-2.18h-.32l-.776 1.875h-3.551v-23.707h4.647v5.516c0 .701-.062 1.823-.184 3.368h.184c1.086-1.686 2.697-2.531 4.829-2.531zm-1.493 3.719c-1.147 0-1.985.353-2.513 1.059-.528.707-.803 1.872-.823 3.498v.502c0 1.829.271 3.139.814 3.932.544.792 1.405 1.188 2.583 1.188.955 0 1.713-.44 2.278-1.318.564-.878.846-2.156.846-3.832 0-1.676-.286-2.934-.854-3.772-.568-.838-1.345-1.257-2.331-1.257zM83.241 100.934h5.088l3.215 9.584c.275.833.463 1.818.564 2.956h.092c.111-1.046.329-2.032.654-2.956l3.154-9.584h4.983l-7.207 19.214c-.661 1.777-1.602 3.108-2.826 3.992-1.225.884-2.654 1.325-4.29 1.325-.803 0-1.59-.086-2.361-.259v-3.687c.558.131 1.167.197 1.828.197.822 0 1.541-.251 2.156-.754.615-.502 1.095-1.261 1.44-2.277l.274-.839-6.764-16.912z" />
    <linearGradient id="rb-a" gradientUnits="userSpaceOnUse" x1="143.917" y1="2125.439" x2="125.854" y2="2157.331" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
        <stop offset={0} stopColor="#FB7655" />
        <stop offset={0} stopColor="#FB7655" />
        <stop offset=".41" stopColor="#E42B1E" />
        <stop offset=".99" stopColor="#900" />
        <stop offset={1} stopColor="#900" />
    </linearGradient>
    <path fill="url(#rb-a)" d="M87.524 58.767l-48.886 29.028 63.3-4.294 4.875-63.828z" />
    <linearGradient id="rb-b" gradientUnits="userSpaceOnUse" x1="152.913" y1="2152.229" x2="129.634" y2="2167.85" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
        <stop offset={0} stopColor="#871101" />
        <stop offset={0} stopColor="#871101" />
        <stop offset=".99" stopColor="#911209" />
        <stop offset={1} stopColor="#911209" />
    </linearGradient>
    <path fill="url(#rb-b)" d="M102.041 83.457l-5.441-37.552-14.818 19.57z" />
    <linearGradient id="rb-c" gradientUnits="userSpaceOnUse" x1="134.287" y1="2124.472" x2="111.008" y2="2140.093" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
        <stop offset={0} stopColor="#871101" />
        <stop offset={0} stopColor="#871101" />
        <stop offset=".99" stopColor="#911209" />
        <stop offset={1} stopColor="#911209" />
    </linearGradient>
    <path fill="url(#rb-c)" d="M102.114 83.457l-39.858-3.129-23.405 7.385z" />
    <linearGradient id="rb-d" gradientUnits="userSpaceOnUse" x1="85.411" y1="2163.54" x2="89.02" y2="2140.086" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
        <stop offset={0} stopColor="#fff" />
        <stop offset={0} stopColor="#fff" />
        <stop offset=".23" stopColor="#E57252" />
        <stop offset=".46" stopColor="#DE3B20" />
        <stop offset=".99" stopColor="#A60003" />
        <stop offset={1} stopColor="#A60003" />
        </linearGradient>
        <path fill="url(#rb-d)" d="M38.906 87.722l9.957-32.62-21.91 4.686z" />
        <linearGradient id="rb-e" gradientUnits="userSpaceOnUse" x1="110.233" y1="2185.439" x2="111.563" y2="2161.502" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
            <stop offset={0} stopColor="#fff" />
            <stop offset={0} stopColor="#fff" />
            <stop offset=".23" stopColor="#E4714E" />
            <stop offset=".56" stopColor="#BE1A0D" />
            <stop offset=".99" stopColor="#A80D00" />
            <stop offset={1} stopColor="#A80D00" />
        </linearGradient>
        <path fill="url(#rb-e)" d="M81.777 65.582l-9.162-35.887-26.219 24.577z" />
        <linearGradient id="rb-f" gradientUnits="userSpaceOnUse" x1="132.261" y1="2207.563" x2="136.242" y2="2190.407" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
            <stop offset={0} stopColor="#fff" />
            <stop offset={0} stopColor="#fff" />
            <stop offset=".18" stopColor="#E46342" />
            <stop offset=".4" stopColor="#C82410" />
            <stop offset=".99" stopColor="#A80D00" />
            <stop offset={1} stopColor="#A80D00" />
        </linearGradient>
        <path fill="url(#rb-f)" d="M104.734 30.201l-24.785-20.243-6.901 22.313z" />
        <linearGradient id="rb-g" gradientUnits="userSpaceOnUse" x1="120.105" y1="2213.604" x2="137.258" y2="2222.18" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
            <stop offset={0} stopColor="#fff" />
            <stop offset={0} stopColor="#fff" />
            <stop offset=".54" stopColor="#C81F11" />
            <stop offset=".99" stopColor="#BF0905" />
            <stop offset={1} stopColor="#BF0905" />
        </linearGradient>
        <path fill="url(#rb-g)" d="M93.142 2.741l-14.576 8.056-9.197-8.164z" />
        <linearGradient id="rb-h" gradientUnits="userSpaceOnUse" x1="70.375" y1="2169.518" x2="71.787" y2="2155.382" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
            <stop offset={0} stopColor="#fff" />
            <stop offset={0} stopColor="#fff" />
            <stop offset=".31" stopColor="#DE4024" />
            <stop offset=".99" stopColor="#BF190B" />
            <stop offset={1} stopColor="#BF190B" />
        </linearGradient>
        <path fill="url(#rb-h)" d="M21.188 70.73l6.107-11.137-4.941-13.267z" />
        <path fill="#fff" d="M22.026 45.905l4.97 14.098 21.595-4.845 24.655-22.913 6.958-22.1-10.955-7.737-18.627 6.971c-5.868 5.458-17.256 16.258-17.667 16.461-.406.208-7.519 13.653-10.929 20.065z" />
        <linearGradient id="rb-i" gradientUnits="userSpaceOnUse" x1="60.669" y1="2151.563" x2="127.036" y2="2219.806" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
            <stop offset={0} stopColor="#BD0012" />
            <stop offset={0} stopColor="#BD0012" />
            <stop offset=".07" stopColor="#fff" />
            <stop offset=".17" stopColor="#fff" />
            <stop offset=".27" stopColor="#C82F1C" />
            <stop offset=".33" stopColor="#820C01" />
            <stop offset=".46" stopColor="#A31601" />
            <stop offset=".72" stopColor="#B31301" />
            <stop offset=".99" stopColor="#E82609" />
            <stop offset={1} stopColor="#E82609" />
        </linearGradient>
        <path fill="url(#rb-i)" d="M39.477 20.581c12.719-12.611 29.115-20.061 35.407-13.712 6.289 6.348-.38 21.776-13.099 34.382-12.718 12.607-28.912 20.468-35.199 14.119-6.294-6.344.173-22.183 12.891-34.789z" />
        <linearGradient id="rb-j" gradientUnits="userSpaceOnUse" x1="111.505" y1="2144.677" x2="91.514" y2="2149.611" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
            <stop offset={0} stopColor="#8C0C01" />
            <stop offset={0} stopColor="#8C0C01" />
            <stop offset=".54" stopColor="#990C00" />
            <stop offset=".99" stopColor="#A80D0E" />
            <stop offset={1} stopColor="#A80D0E" />
            </linearGradient>
            <path fill="url(#rb-j)" d="M38.906 87.709l9.879-32.724 32.811 10.541c-11.864 11.125-25.058 20.528-42.69 22.183z" />
            <linearGradient id="rb-k" gradientUnits="userSpaceOnUse" x1="145.839" y1="2168.67" x2="128.08" y2="2184.586" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
                <stop offset={0} stopColor="#7E110B" />
                <stop offset={0} stopColor="#7E110B" />
                <stop offset=".99" stopColor="#9E0C00" />
                <stop offset={1} stopColor="#9E0C00" />
            </linearGradient>
            <path fill="url(#rb-k)" d="M73.289 32.181l8.423 33.363c9.91-10.419 18.804-21.621 23.159-35.476l-31.582 2.113z" />
            <linearGradient id="rb-l" gradientUnits="userSpaceOnUse" x1="152.364" y1="2197.874" x2="143.518" y2="2207.331" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
                <stop offset={0} stopColor="#79130D" />
                <stop offset={0} stopColor="#79130D" />
                <stop offset=".99" stopColor="#9E120B" />
                <stop offset={1} stopColor="#9E120B" />
            </linearGradient>
            <path fill="url(#rb-l)" d="M104.785 30.236c3.371-10.174 4.148-24.768-11.746-27.477l-13.043 7.204 24.789 20.273z" />
            <path fill="#9E1209" d="M21.188 70.583c.467 16.789 12.581 17.04 17.741 17.188l-11.92-27.837-5.821 10.649z" />
            <radialGradient id="rb-m" cx="130.847" cy="2184.281" r="21.762" gradientTransform="matrix(1 0 0 -1 -47.5 2221)" gradientUnits="userSpaceOnUse">
                <stop offset={0} stopColor="#A80D00" />
                <stop offset={0} stopColor="#A80D00" />
                <stop offset=".99" stopColor="#7E0E08" />
                <stop offset={1} stopColor="#7E0E08" />
            </radialGradient>
            <path fill="url(#rb-m)" d="M73.337 32.232c7.615 4.68 22.96 14.08 23.271 14.253.484.272 6.617-10.342 8.008-16.34l-31.279 2.087z" />
            <radialGradient id="rb-n" cx="100.707" cy="2155.602" r="28.932" gradientTransform="matrix(1 0 0 -1 -47.5 2221)" gradientUnits="userSpaceOnUse">
                <stop offset={0} stopColor="#A30C00" />
                <stop offset={0} stopColor="#A30C00" />
                <stop offset=".99" stopColor="#800E08" />
                <stop offset={1} stopColor="#800E08" />
            </radialGradient>
            <path fill="url(#rb-n)" d="M48.772 54.986l13.207 25.48c7.81-4.235 13.924-9.395 19.526-14.922l-32.733-10.558z" />
            <linearGradient id="rb-o" gradientUnits="userSpaceOnUse" x1="80.214" y1="2133.309" x2="73.005" y2="2157.766" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
                <stop offset={0} stopColor="#8B2114" />
                <stop offset={0} stopColor="#8B2114" />
                <stop offset=".43" stopColor="#9E100A" />
                <stop offset=".99" stopColor="#B3100C" />
                <stop offset={1} stopColor="#B3100C" />
            </linearGradient>
            <path fill="url(#rb-o)" d="M26.957 59.969l-1.872 22.282c3.532 4.823 8.389 5.241 13.485 4.866-3.687-9.175-11.051-27.521-11.613-27.148z" />
            <linearGradient id="rb-p" gradientUnits="userSpaceOnUse" x1="135.518" y1="2214.356" x2="151.68" y2="2207.222" gradientTransform="matrix(1 0 0 -1 -47.5 2221)">
                <stop offset={0} stopColor="#B31000" />
                <stop offset={0} stopColor="#B31000" />
                <stop offset=".44" stopColor="#910F08" />
                <stop offset=".99" stopColor="#791C12" />
                <stop offset={1} stopColor="#791C12" />
            </linearGradient>
            <path fill="url(#rb-p)" d="M79.919 10.02l26.237 3.683c-1.401-5.935-5.701-9.763-13.03-10.961l-13.207 7.278z" />
</svg>
        ),
        workExperience: false
    },
    {
        skillname: 'Python3',
        level: 4,
        period: 4,
        svg: (
            <svg viewBox="0 0 128 128">
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                    <stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient><path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" /><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient><path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" /><radialGradient id="c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" /><stop offset="1" stopColor="#7F7F7F" stopOpacity="0" /></radialGradient><path opacity=".444" fill="url(#c)" enableBackground="new" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z" />
            </svg>
        ),
        workExperience: true,
        frameworkIveUsed: [
            {
                skillname: 'Flask',
                level: 3,
                period: 2,
                workExperience: true
            },
            {
                skillname: 'django',
                level: 1,
                period: 1,
                workExperience: false
            },
        ]
    },
    {
        skillname: 'PHP',
        level: 3,
        period: 5,
        svg: (
            <svg viewBox="0 0 128 128">
                <defs>
                    <path id="a" d="M64.026 96.076c33.676 0 60.976-14.361 60.976-32.076s-27.3-32.075-60.976-32.075-60.975 14.36-60.975 32.075 27.3 32.076 60.975 32.076" />
                    </defs>
                    <defs>
                        <path id="c" d="M2.998 31.924h122.004v64.1h-122.004z" />
                    </defs>
                    <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <clipPath id="d" clipPath="url(#b)">
                        <use xlinkHref="#c" overflow="visible" />
                    </clipPath>
                        <g clipPath="url(#d)">
                            <defs>
                                <path id="e" d="M2.998 31.924h122.004v64.1h-122.004z" />
                            </defs>
                            <clipPath id="f">
                                <use xlinkHref="#e" overflow="visible" />
                            </clipPath>
                            <g clipPath="url(#f)">
                                <image overflow="visible" width="1160" height="609" xlinkHref="data:image/jpeg;base64,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" transform="matrix(.106 0 0 -.106 2.825 96.168)"/>
                            </g>
                        </g>
                    <path fill="#6181B6" d="M64.026 93.694c32.36 0 58.594-13.295 58.594-29.694s-26.233-29.694-58.594-29.694-58.593 13.295-58.593 29.694 26.233 29.694 58.593 29.694z" />
                    <path fill="#fff" d="M75.896 73.598l2.906-14.958c.656-3.377.11-5.896-1.62-7.486-1.677-1.54-4.523-2.288-8.703-2.288h-5.033l1.44-7.412c.055-.279-.02-.568-.2-.788-.181-.219-.45-.347-.735-.347h-6.947c-.456 0-.848.323-.936.771l-3.086 15.881c-.28-1.787-.973-3.323-2.079-4.591-2.038-2.332-5.261-3.515-9.58-3.515h-13.467c-.456 0-.848.322-.935.771l-6.247 32.144c-.055.278.02.568.2.787.181.22.451.347.735.347h7.002c.456 0 .849-.323.936-.771l1.511-7.775h5.213c2.735 0 5.032-.296 6.827-.881 1.834-.596 3.522-1.607 5.011-3.001 1.202-1.104 2.196-2.341 2.96-3.676l-1.248 6.424c-.054.278.02.567.2.787s.451.347.735.347h6.947c.456 0 .848-.323.936-.771l3.429-17.645h4.767c2.031 0 2.626.404 2.787.578.147.159.452.718.11 2.48l-2.764 14.223c-.055.278.019.567.2.787.181.22.45.347.735.347h7.058c.455.001.848-.322.935-.769zm-32.208-12.36c-.437 2.242-1.259 3.842-2.444 4.755-1.205.927-3.132 1.397-5.727 1.397h-3.104l2.244-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.802 2.199.407 4.238zM105.604 52.38c-2.038-2.332-5.261-3.515-9.581-3.515h-13.464c-.456 0-.849.322-.936.771l-6.248 32.144c-.054.278.02.568.201.787.181.22.45.347.734.347h7.003c.455 0 .848-.323.935-.771l1.512-7.775h5.212c2.735 0 5.033-.296 6.827-.881 1.835-.596 3.522-1.607 5.011-3.001 1.241-1.141 2.264-2.421 3.037-3.806.772-1.383 1.328-2.927 1.65-4.588.797-4.094.16-7.363-1.893-9.712zm-7.262 8.858c-.437 2.242-1.259 3.842-2.444 4.755-1.204.927-3.131 1.397-5.727 1.397h-3.104l2.245-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.801 2.199.406 4.238z" />
                    <path fill="#000004" d="M38.67 54.89c2.66 0 4.434.491 5.32 1.474.885.982 1.097 2.668.633 5.057-.484 2.488-1.416 4.264-2.798 5.328-1.382 1.063-3.485 1.595-6.308 1.595h-4.26l2.614-13.453h4.799v-.001zm-17.061 27.072h7.002l1.661-8.546h5.998c2.646 0 4.823-.277 6.532-.834 1.709-.556 3.263-1.488 4.661-2.797 1.173-1.078 2.122-2.268 2.85-3.569.727-1.3 1.242-2.734 1.547-4.305.741-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.862-3.189h-13.466l-6.247 32.144zM57.003 41.271h6.947l-1.661 8.546h6.189c3.894 0 6.58.68 8.059 2.037 1.479 1.359 1.921 3.561 1.33 6.603l-2.906 14.959h-7.058l2.763-14.223c.314-1.618.199-2.722-.347-3.311-.546-.587-1.708-.882-3.485-.882h-5.553l-3.578 18.416h-6.947l6.247-32.145zM93.324 54.89c2.66 0 4.434.491 5.319 1.474.887.982 1.097 2.668.634 5.057-.484 2.488-1.417 4.264-2.799 5.328-1.382 1.063-3.484 1.595-6.308 1.595h-4.259l2.614-13.453h4.799v-.001zm-17.06 27.072h7.002l1.661-8.546h5.997c2.646 0 4.823-.277 6.532-.834 1.71-.556 3.264-1.488 4.661-2.797 1.174-1.078 2.123-2.268 2.851-3.569.726-1.3 1.242-2.734 1.547-4.305.74-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.863-3.189h-13.465l-6.247 32.144z" />
            </svg>
        ),
        workExperience: true,
        frameworkIveUsed: [
            {
                skillname: 'CodeIgniter',
                level: 3,
                period: 3,
                workExperience: true
            },
            {
                skillname: 'MySQL',
                level: 3,
                period: 4,
                workExperience: true
            },
            {
                skillname: 'SQLite',
                level: 3,
                period: 2,
                workExperience: false
            },
        ]
    },
    {
        skillname: 'Go',
        level: 1,
        period: 1,
        svg: (
            <svg viewBox="0 0 128 128">
                <g><defs><path id="a" d="M18.8 1h90.5v126h-90.5z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M21.1 68.7c.2 3.5 3.7 1.9 5.3.8 1.5-1.1 2-.2 2.1-2.3.1-1.4.2-2.7.2-4.1-2.3-.2-4.8.3-6.7 1.7-.9.7-2.8 3-.9 3.9" clipPath="url(#b)" /><path d="M23 71.2c-.7 0-2-.3-2.2-2.3-.6-.4-.8-.9-.8-1.2-.1-1.2 1.2-2.6 1.9-3.1 1.6-1.2 3.7-1.8 5.9-1.8h1.3v.3c.1 1.1 0 2.2-.1 3.2 0 .3 0 .6-.1.9-.1 1.5-.4 1.7-1.1 2-.3.1-.6.2-1.1.6-.5.3-2.2 1.4-3.7 1.4zm4.8-7.8c-2.1 0-4 .6-5.5 1.7-.7.5-1.7 1.7-1.6 2.5 0 .3.2.6.6.8l.2.1v.2c.1 1.6.9 1.8 1.5 1.8 1 0 2.4-.7 3.3-1.3.6-.4 1-.5 1.3-.6.5-.2.6-.2.7-1.4 0-.3 0-.6.1-.9.1-.9.1-1.9.1-2.8-.3-.1-.5-.1-.7-.1z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#C6B198" d="M21.1 68.7c.5-.2 1.1-.3 1.4-.8" clipPath="url(#b)" /><path d="M21.1 69c-.1 0-.3-.1-.3-.2-.1-.2 0-.4.2-.4.1 0 .2-.1.2-.1.4-.2.8-.3 1-.6.1-.1.3-.2.5-.1.1.1.2.3.1.5-.4.5-.9.7-1.3.8l-.2.1h-.2z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5" d="M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z" clipPath="url(#b)" /><path d="M29.5 26.8l-.3-.1c-7-2-6.9-7-6.7-8.5.5-3.8 4.1-7.8 8.9-7.8 1.9 0 3.7.6 5.5 1.8l.3.2-7.7 14.4zm1.9-15.7c-4.5 0-7.8 3.7-8.3 7.2-.5 3.6 1.7 6.4 6 7.7l7.1-13.5c-1.5-.9-3.1-1.4-4.8-1.4z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5" d="M89.6 11.1c10.7-7.5 20.5 9.5 8 13.8l-8-13.8z" clipPath="url(#b)" /><path d="M97.5 25.3l-8.3-14.3.3-.2c1.9-1.3 3.8-2 5.7-2 4.6 0 7.9 3.8 8.6 7.5.3 1.5.6 6.6-6 8.8l-.3.2zm-7.4-14l7.7 13.3c3.9-1.4 5.9-4.4 5.3-8-.6-3.4-3.7-6.9-7.9-6.9-1.7-.1-3.4.4-5.1 1.6z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M92 112.3c2.7 1.7 7.7 6.8 3.6 9.3-3.9 3.6-6.1-4-9.6-5 1.5-2 3.4-3.9 6-4.3" clipPath="url(#b)" /><path d="M93.5 122.9c-1.6 0-3-1.6-4.2-3.1-1.1-1.2-2.2-2.5-3.4-2.9l-.5-.1.3-.4c1.2-1.7 3.2-3.9 6.2-4.4h.1l.1.1c1.7 1.1 5.4 4.2 5.3 7.1 0 1.1-.6 2-1.7 2.7-.7.7-1.4 1-2.2 1zm-7-6.5c1.2.5 2.2 1.8 3.2 2.9 1.2 1.5 2.4 2.8 3.7 2.8.6 0 1.2-.3 1.8-.9h.1c.9-.6 1.4-1.3 1.4-2.2 0-2.3-2.9-5.2-4.9-6.5-1.8.5-3.6 1.7-5.3 3.9zM95.6 121.9c-.1 0-.2-.1-.3-.2-.2-.4-.4-.9-.5-1.3-.3-.8-.6-1.6-1.2-2.2-.1-.1-.1-.3 0-.5.1-.1.3-.1.5 0 .7.7 1.1 1.6 1.4 2.5l.5 1.2c.1.2 0 .4-.1.5h-.3z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M43.2 118.1c-3.2.5-5 3.4-7.7 4.9-2.5 1.5-3.5-.5-3.7-.9-.4-.2-.4.2-1-.4-2.3-3.7 2.4-6.4 4.9-8.2 3.5-.8 5.7 2.2 7.5 4.6" clipPath="url(#b)" /><path d="M33.8 123.8c-1.3 0-2-1.1-2.2-1.5h-.1c-.3 0-.5-.1-.9-.5v-.1c-2.2-3.5 1.6-6.2 4.1-8l.9-.6h.2c.4-.1.7-.1 1.1-.1 3 0 4.9 2.6 6.5 4.7l.5.7-.6.1c-1.9.3-3.3 1.5-4.7 2.7-.9.8-1.8 1.5-2.8 2.1-.8.3-1.4.5-2 .5zm-2.2-2.1c.1 0 .2 0 .4.1h.1l.1.1c.2.3.7 1.2 1.7 1.2.5 0 1-.2 1.5-.5 1-.5 1.9-1.3 2.7-2 1.3-1.1 2.7-2.3 4.5-2.8-1.5-2-3.3-4.2-5.8-4.2-.3 0-.6 0-.9.1l-.8.6c-2.6 1.8-5.8 4.1-3.9 7.1.1.2.2.3.4.3zM31.8 122.4c-.2 0-.4-.2-.3-.4.1-1 .6-1.7 1.1-2.5.3-.4.5-.8.7-1.2.1-.2.3-.2.4-.2.2.1.2.3.2.4-.2.5-.5.9-.8 1.3-.5.7-.9 1.3-1 2.1 0 .4-.1.5-.3.5z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" d="M29.9 21.7c-1.8-.9-3.1-2.2-2-4.3 1-1.9 2.9-1.7 4.7-.8l-2.7 5.1zM94.8 19.9c1.8-.9 3.1-2.2 2-4.3-1-1.9-2.9-1.7-4.7-.8l2.7 5.1z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M107.1 68.2c-.2 3.5-3.7 1.9-5.3.8-1.5-1.1-2-.2-2.1-2.3-.1-1.4-.2-2.7-.2-4.1 2.3-.2 4.8.3 6.7 1.7 1 .8 2.8 3 .9 3.9" clipPath="url(#b)" /><path d="M105.3 70.7c-1.5 0-3.2-1.1-3.7-1.4-.5-.3-.8-.5-1.1-.6-.8-.3-1-.5-1.1-2 0-.3 0-.6-.1-.9-.1-1-.2-2.1-.1-3.2v-.3h1.3c2.2 0 4.3.6 5.9 1.8.7.5 2 1.9 1.9 3.1 0 .4-.2.9-.8 1.2-.2 2-1.5 2.3-2.2 2.3zm-5.5-7.7c0 .9 0 1.9.1 2.8 0 .3 0 .6.1.9.1 1.2.2 1.2.7 1.4.3.1.7.3 1.3.6.9.6 2.3 1.3 3.3 1.3.6 0 1.4-.2 1.5-1.8v-.2l.2-.1c.4-.2.6-.4.6-.8.1-.8-.9-2-1.6-2.5-1.5-1.1-3.5-1.7-5.5-1.7-.2.1-.4.1-.7.1z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#C6B198" d="M107.1 68.2c-.5-.2-1.1-.3-1.4-.8" clipPath="url(#b)" /><path d="M107.1 68.6h-.1l-.2-.1c-.5-.2-1-.3-1.3-.8-.1-.1-.1-.4.1-.5.1-.1.4-.1.5.1.2.3.6.4 1 .6.1 0 .2.1.2.1.2.1.3.3.2.4-.1.1-.3.2-.4.2z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5" d="M62.8 4c13.6 0 26.3 1.9 33 15 6 14.6 3.8 30.4 4.8 45.9.8 13.3 2.5 28.6-3.6 40.9-6.5 12.9-22.7 16.2-36 15.7-10.5-.4-23.1-3.8-29.1-13.4-6.9-11.2-3.7-27.9-3.2-40.4.6-14.8-4-29.7.9-44.1 4.9-15.1 18.5-18.5 33.2-19.6" clipPath="url(#b)" /><path d="M63.3 121.9h-2.5c-4.1-.1-10.3-.8-16.4-3.3-5.9-2.4-10.2-5.8-13-10.3-5.6-9.1-4.6-21.6-3.7-32.7.2-2.8.4-5.4.5-7.9.2-5.2-.2-10.6-.7-15.7-.8-9.4-1.6-19.1 1.5-28.5 2.4-7 6.7-12 13.2-15.2 5.1-2.5 11.4-3.9 20.4-4.6 13.4-.1 26.7 1.8 33.4 15.1 4.4 10.7 4.4 22.2 4.5 33.3 0 4.2 0 8.5.3 12.7.1 1.3.2 2.6.2 3.9.8 12.2 1.7 26-3.9 37.2-2.8 5.7-7.7 9.9-14.4 12.6-5.4 2.2-12.2 3.4-19.4 3.4zm-.5-117.6c-14.1 1.1-27.9 4.2-33 19.4-3.1 9.3-2.3 18.9-1.5 28.2.4 5.2.9 10.5.7 15.8-.1 2.5-.3 5.1-.5 7.9-.9 11-1.9 23.4 3.6 32.3 2.3 3.7 9.7 12.5 28.8 13.2h2.5c22.1 0 30.3-9.8 33.3-15.6 5.5-11 4.6-24.8 3.9-36.9-.1-1.3-.2-2.6-.2-3.9-.2-4.2-.3-8.5-.3-12.7-.1-11-.1-22.5-4.4-33.1-3-5.9-7.5-9.9-13.7-12.2-6.4-2.1-13.6-2.4-19.2-2.4z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M65.2 22.2c2.4 14.2 25.6 10.4 22.3-3.9-3-12.8-23.1-9.2-22.3 3.9" clipPath="url(#b)" /><path d="M76.2 31.5c-4.5 0-10.2-2.4-11.4-9.2-.2-3.2.8-6.1 2.9-8.3 2.3-2.5 5.8-3.9 9.4-3.9 4.2 0 9.2 2.2 10.6 8.3.8 3.4.2 6.4-1.7 8.8-2.1 2.6-5.8 4.3-9.8 4.3zm-10.7-9.3c.5 2.8 1.8 5 3.9 6.6 1.8 1.4 4.3 2.1 6.8 2.1 3.7 0 7.3-1.6 9.3-4.1 1.8-2.2 2.3-5.1 1.6-8.3-1.3-5.7-6-7.7-10-7.7-3.4 0-6.7 1.4-8.9 3.7-1.9 2-2.9 4.7-2.7 7.7z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M37.5 24.5c3.2 12.3 22.9 9.2 22.2-3.2-.9-14.8-25.3-12-22.2 3.2" clipPath="url(#b)" /><path d="M48 32.7c-4.3 0-9.3-2.1-10.9-8.1-.7-3.5 0-6.7 2-9.1 2.2-2.7 5.8-4.3 9.7-4.3 5.2 0 10.7 3.1 11.1 10.1.2 2.9-.7 5.5-2.7 7.6-2.1 2.3-5.6 3.8-9.2 3.8zm.8-20.8c-3.7 0-7.1 1.5-9.2 4-1.9 2.3-2.5 5.2-1.8 8.5 1.4 5.6 6.2 7.6 10.2 7.6 3.4 0 6.7-1.3 8.8-3.6 1.8-1.9 2.7-4.4 2.5-7.1-.2-4.3-3.1-9.4-10.5-9.4z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M68 39.2c0 1.8.4 3.9.1 5.9-.5.9-1.4 1-2.2 1.3-1.1-.2-2-.9-2.5-1.9-.3-2.2.1-4.4.2-6.6l4.4 1.3z" clipPath="url(#b)" /><path d="M65.9 46.8c-1.3-.2-2.3-1-2.8-2.1-.2-1.6-.1-3.1 0-4.6.1-.7.1-1.4.1-2.1v-.4l5.1 1.6v.2c0 .6.1 1.2.1 1.9.1 1.3.2 2.7 0 4v.1c-.4.8-1.1 1-1.8 1.3-.2-.1-.4 0-.7.1zm-2.2-2.4c.4.9 1.2 1.5 2.1 1.7.2-.1.4-.1.5-.2.6-.2 1.1-.4 1.4-.9.2-1.2.1-2.5 0-3.8 0-.6-.1-1.2-.1-1.7l-3.8-1.2c0 .6-.1 1.2-.1 1.7-.1 1.6-.2 3 0 4.4z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" d="M46.3 22.5c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M45.2 23.3c0 .5-.4.9-.8.9s-.8-.4-.8-.9.4-.9.8-.9c.5 0 .8.4.8.9" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" d="M74.2 21.6c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M73.2 22.4c0 .5-.3.9-.8.9-.4 0-.8-.4-.8-.9s.3-.9.8-.9c.4 0 .8.4.8.9" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M58.4 39c-1.5 3.5.8 10.6 4.8 5.4-.3-2.2.1-4.4.2-6.6l-5 1.2z" clipPath="url(#b)" /><path d="M60.5 46.6c-.7 0-1.4-.4-1.9-1.2-1.1-1.6-1.3-4.6-.5-6.5l.1-.2 5.5-1.4v.4l-.1 2.2c-.1 1.5-.2 2.9 0 4.4v.1l-.1.1c-1 1.4-2 2.1-3 2.1zm-1.8-7.3c-.6 1.7-.4 4.4.5 5.7.4.6.8.9 1.3.9.7 0 1.5-.6 2.3-1.6-.2-1.5-.1-3 .1-4.4l.1-1.7-4.3 1.1z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M58.9 32.2c-2.7.2-4.9 3.5-3.5 6 1.9 3.4 6-.3 8.6 0 3 .1 5.4 3.2 7.8.6 2.7-2.9-1.2-5.7-4.1-7l-8.8.4z" clipPath="url(#b)" /><path fill="#231F20" d="M69.7 40.2c-.9 0-1.8-.4-2.7-.8-.9-.4-1.9-.8-3-.8h-.3c-.8 0-1.7.3-2.7.7-1.1.4-2.2.7-3.2.7-1.2 0-2.1-.5-2.7-1.6-.7-1.2-.6-2.6.1-3.9.8-1.5 2.2-2.4 3.7-2.6l8.9-.4h.1c2.2.9 4.7 2.6 5.2 4.6.2 1-.1 2-.9 2.9-.8.9-1.6 1.2-2.5 1.2zm-5.6-2.2c1.1 0 2.2.5 3.2.9.9.4 1.7.7 2.5.7.7 0 1.3-.3 1.9-.9.7-.7.9-1.5.8-2.3-.4-1.7-2.8-3.3-4.7-4.1l-8.7.4c-1.3.1-2.5 1-3.2 2.2-.6 1.1-.6 2.3-.1 3.3.5.9 1.1 1.3 2.1 1.3.9 0 1.9-.4 2.9-.7 1.1-.4 2-.7 3-.7 0-.2.1-.2.3-.1z" clipPath="url(#b)" /><path fillRule="evenodd" clipRule="evenodd" d="M58.6 32.1c-.2-4.7 8.8-5.3 9.8-1.4 1.1 4-9.4 4.9-9.8 1.4" clipPath="url(#b)" /></g>
            </svg>
        ),
        workExperience: false
    },
    {
        skillname: 'Lisp',
        level: 1,
        period: 1,
        icon: 'fas fa-code',
        workExperience: false
    },
    {
        skillname: 'Kotlin',
        level: 1,
        period: 1,
        svg: (
            <svg viewBox="0 0 128 128">
                <g>
                    <linearGradient id="SVGID_1_KOTLIN" gradientUnits="userSpaceOnUse" x1="-11.8991" y1="48.6943" x2="40.2992" y2="-8.3222">
                        <stop offset="0" style={{stopColor: '#1C93C1'}} /><stop offset="0.1625" style={{stopColor: '#2391C0'}} /><stop offset="0.4043" style={{stopColor: '#378BBE'}} /><stop offset="0.6955" style={{stopColor: '#587EB9'}} /><stop offset="0.9952" style={{stopColor: '#7F6CB1'}} /></linearGradient><path fill="url(#SVGID_1_KOTLIN)" d="M 0,0 65.4,0 0,64.4 z" /><linearGradient id="SVGID_2_KOTLIN" gradientUnits="userSpaceOnUse" x1="43.5526" y1="149.1739" x2="95.9878" y2="94.8756"><stop offset="0" style={{stopColor: '#1C93C1'}} /><stop offset="0.2156" style={{stopColor: '#2D8EBF'}} /><stop offset="0.6399" style={{stopColor: '#587EB9'}} /><stop offset="0.9952" style={{stopColor: '#7F6CB1'}} /></linearGradient><path fill="url(#SVGID_2_KOTLIN)" d="M 128,128 64.6,62.6 0,128 z" /><linearGradient id="SVGID_3_KOTLIN" gradientUnits="userSpaceOnUse" x1="3.2398" y1="95.2486" x2="92.4815" y2="2.1156"><stop offset="0" style={{stopColor: '#C757A7'}} /><stop offset="4.551384e-02" style={{stopColor: '#CA5A9E'}} /><stop offset="0.2413" style={{stopColor: '#D66779'}} /><stop offset="0.428" style={{stopColor: '#E17357'}} /><stop offset="0.6004" style={{stopColor: '#E97C3A'}} /><stop offset="0.7556" style={{stopColor: '#EF8324'}} /><stop offset="0.8879" style={{stopColor: '#F28817'}} /><stop offset="0.9819" style={{stopColor: '#F48912'}} /></linearGradient><path fill="url(#SVGID_3_KOTLIN)" d="M 0,128 128,0 64.6,0 0,63.7 z" /></g>
            </svg>
        ),
        workExperience: false
    },
    {
        skillname: 'Prolog',
        level: 1,
        period: 1,
        icon: 'fas fa-code',
        workExperience: false
    },
    {
        skillname: 'ShellScript',
        level: 3,
        period: 3,
        svg: (
            <svg viewBox="0 0 128 128">
                <g>
                    <rect fill="none" x="4.24" y="4.24" width="119.53" height="119.53" />
                    <g>
                        <g>
                            <path fill="#293138" d="M109.01,28.64L71.28,6.24C69.03,4.91,66.51,4.24,64,4.24s-5.03,0.67-7.28,2.01l-37.74,22.4 c-4.5,2.67-7.28,7.61-7.28,12.96v44.8c0,5.35,2.77,10.29,7.28,12.96l37.73,22.4c2.25,1.34,4.76,2,7.28,2c2.51,0,5.03-0.67,7.28-2 l37.74-22.4c4.5-2.67,7.28-7.62,7.28-12.96V41.6C116.29,36.26,113.52,31.31,109.01,28.64z M79.79,98.59l0.06,3.22 c0,0.39-0.25,0.83-0.55,0.99l-1.91,1.1c-0.3,0.15-0.56-0.03-0.56-0.42l-0.03-3.17c-1.63,0.68-3.29,0.84-4.34,0.42 c-0.2-0.08-0.29-0.37-0.21-0.71l0.69-2.91c0.06-0.23,0.18-0.46,0.34-0.6c0.06-0.06,0.12-0.1,0.18-0.13 c0.11-0.06,0.22-0.07,0.31-0.03c1.14,0.38,2.59,0.2,3.99-0.5c1.78-0.9,2.97-2.72,2.95-4.52c-0.02-1.64-0.9-2.31-3.05-2.33 c-2.74,0.01-5.3-0.53-5.34-4.57c-0.03-3.32,1.69-6.78,4.43-8.96l-0.03-3.25c0-0.4,0.24-0.84,0.55-1l1.85-1.18 c0.3-0.15,0.56,0.04,0.56,0.43l0.03,3.25c1.36-0.54,2.54-0.69,3.61-0.44c0.23,0.06,0.34,0.38,0.24,0.75l-0.72,2.88 c-0.06,0.22-0.18,0.44-0.33,0.58c-0.06,0.06-0.13,0.11-0.19,0.14c-0.1,0.05-0.19,0.06-0.28,0.05c-0.49-0.11-1.65-0.36-3.48,0.56 c-1.92,0.97-2.59,2.64-2.58,3.88c0.02,1.48,0.77,1.93,3.39,1.97c3.49,0.06,4.99,1.58,5.03,5.09 C84.45,92.62,82.61,96.33,79.79,98.59z M106.13,38.09l-35.7,22.05c-4.45,2.6-7.73,5.52-7.74,10.89v43.99 c0,3.21,1.3,5.29,3.29,5.9c-0.65,0.11-1.32,0.19-1.98,0.19c-2.09,0-4.15-0.57-5.96-1.64l-37.73-22.4 c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39,2.29-8.48,5.98-10.67l37.74-22.4c1.81-1.07,3.87-1.64,5.96-1.64 s4.15,0.57,5.96,1.64l37.74,22.4c3.11,1.85,5.21,5.04,5.8,8.63C112.24,36.89,109.42,36.17,106.13,38.09z" />
                        </g>
                        <g>
                            <path fill="#4FA847" d="M99.12,90.73l-9.4,5.62c-0.25,0.15-0.43,0.31-0.43,0.61v2.46c0,0.3,0.2,0.43,0.45,0.28l9.54-5.8 c0.25-0.15,0.29-0.42,0.29-0.72v-2.17C99.57,90.71,99.37,90.59,99.12,90.73z" />
                        </g>
                    </g>
                </g>
            </svg>
        ),
        workExperience: false
    },
    {
        skillname: 'Smalltalk',
        level: 1,
        period: 1,
        icon: 'fas fa-code',
        workExperience: false
    },
    {
        skillname: 'Swift',
        level: 1,
        period: 1,
        svg: (
            <svg viewBox="0 0 128 128">
                <g id="orignal"><path fill="#f05138" d="M126.33,34.06a39.32,39.32,0,0,0-.79-7.83,28.78,28.78,0,0,0-2.65-7.58,28.84,28.84,0,0,0-4.76-6.32,23.42,23.42,0,0,0-6.62-4.55,27.27,27.27,0,0,0-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25A45.46,45.46,0,0,0,24.16,5a21.82,21.82,0,0,0-5.82,1.52c-.53.25-1.32.51-1.85.76a33.82,33.82,0,0,0-5,3.28c-.53.51-1.06.76-1.59,1.26a22.41,22.41,0,0,0-4.76,6.32,23.61,23.61,0,0,0-2.65,7.58,78.5,78.5,0,0,0-.79,7.83V93.94a39.32,39.32,0,0,0,.79,7.83,28.78,28.78,0,0,0,2.65,7.58,28.84,28.84,0,0,0,4.76,6.32,23.42,23.42,0,0,0,6.62,4.55,27.27,27.27,0,0,0,7.68,2.53c2.65.51,5.56.51,8.21.76H95.63a45.08,45.08,0,0,0,8.21-.76,27.27,27.27,0,0,0,7.68-2.53,30.13,30.13,0,0,0,6.62-4.55,22.41,22.41,0,0,0,4.76-6.32,23.61,23.61,0,0,0,2.65-7.58,78.49,78.49,0,0,0,.79-7.83V34.06Z" /><path fill="#fefefe" d="M85,96.5c-11.11,6.13-26.38,6.76-41.75.47A64.53,64.53,0,0,1,13.84,73a50,50,0,0,0,10.85,6.32c15.87,7.1,31.73,6.61,42.9,0l0,0C51.69,67.66,38.19,52.5,28.13,40.12a43.47,43.47,0,0,1-5.29-6.82C35,43.91,54.34,57.3,61.22,61.09a271.77,271.77,0,0,1-27-32.34A266.8,266.8,0,0,0,78.69,63.62c.71.38,1.26.7,1.7,1a32.7,32.7,0,0,0,1.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25,33.81,106,57.05,100.66,76.51c-.14.53-.29,1-.45,1.55l.19.22c10.59,12.63,7.68,26,6.35,23.5C101,91,90.37,94.33,85,96.5Z" /></g>
            </svg>
        ),
        workExperience: false
    },
    // {
    //     skillname: 'Prolog',
    //     level: 0,
    //     period: 0,
    //     workExperience: false
    // },
]

type MatchData = (SkillImpl | undefined)

export const getSkillname = (element: SkillImpl): string => {
    let skillname: string = ''
    if(Array.isArray(element.skillname)) {
        skillname = element.skillname[0]
    }else {
        skillname = element.skillname
    }
    return skillname
}

export const isMatch = (target: string): MatchData => {
    let result: MatchData
    let isLoop: boolean = true
    skills.forEach((item, idx) => {
        const skillname = getSkillname(item).toLowerCase()
        if(isLoop) {
            if(skillname === target) {
                if(target === 'c') {
                    result = {
                        ...skills[idx],
                        skillname: 'clang'
                    }
                }else{
                    result = skills[idx]
                }
                isLoop = false
            }
        }
    })
    return result
}